const { User } = require('../models/user');
const { sign } = require('./custom/jwt.service');
const { loadMulter} = require('./custom/multipart.service');
const { generateTemplate, transporter } = require('./custom/mailer.service');
const { validate, encrypt, generatePassword } = require('./custom/crypto.service');

module.exports = {
    register: async (request, cb) => {
        let userObj = request.body;
        let isUserExist = await User.findOne({ 'mobile': userObj.mobile });
        if (isUserExist) cb(new Error('User already exist', {}));
        else {
            let plainPass = generatePassword();
            let password = await encrypt(plainPass);
            userObj.password = password;
            await User.create(userObj, (err, result) => {
                cb(err, result);
            });
            //mail logic here
            let mailOption = await generateTemplate(
                {
                    password: plainPass,
                    fullname: (userObj.fname + ' ' + userObj.lname),
                    username: userObj.email
                }
                , 'user/userRegistration.html');
            await transporter.sendMail({
                from: '"rahulnarayanan1994@gmail.com" <no-reply@fitgo.com>',
                to: userObj.email,
                subject: 'Greetings from Fit-go',
                html: mailOption
            });

        }
    },
    login: async (request, cb) => {
        let { email, password } = request.body;
        let isUser = await User.findOne({ 'email': email });
        if (isUser) {
            if (validate(password, isUser.password)) {
                try {
                    let token = sign({
                        userId: isUser._id,
                        email: isUser.email,
                        role: isUser.role,
                        name: isUser.fullname
                    });
                    cb(null, token);
                } catch (e) { cb(e); };
            } else { cb(new Error('Incorrect Password')); }
        } else { cb(new Error('Invalid username, try again!!')); };
    },
    updateDisplayPicture: async (request, cb) => {
        let upload = loadMulter.single('dp');
        await upload(request, null, (err) => {
            if (err)
                cb(err);
            else {
                User
                    .findByIdAndUpdate(request.verifiedToken._id, {
                        dp: request.file.filename
                    }, { new: true })
                    .exec((err, result) => {
                        cb(err, result);
                    });
            }
        });
    },
    getProfileInfo: async (request, cb) => {
        await User
            .findById(request.verifiedToken.userId, 'fname lname dp email gender mobile role')
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateProfile: async (request, cb) => {
        await User
            .findOneAndUpdate({ _id: request.verifiedToken.userId },
                request.body, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    list: async (request, cb) => {
        await User
            .find({ _id: { '$ne': request.verifiedToken.userId } }, '_id fname lname dp email gender mobile status')
            .exec((err, result) => {
                cb(err, result);
            });
    }
};