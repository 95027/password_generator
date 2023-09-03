import { useState } from "react";

const UsePwdGenerator = () => {
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const generatePassword = (checkboxData, length) => {
        let charset = "";
        let generatedPassword = "";

        const selectedOptions = checkboxData.filter(checkbox => checkbox.status);

        // for not selected any options
        if(selectedOptions.length === 0){
            setErrMsg("Select atleast one option to proceed...!");
            setPassword("");
            return;
        }

        selectedOptions.forEach(option => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters" :
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers" :
                    charset += "0987654321";
                    break;
                case "Include Symbols" :
                    charset += "~!@#$%^&*()";
                    break;
                default:
                    break;
            }
        })

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);
        setErrMsg("");
    }


    return {password, errMsg, generatePassword};
}



export default UsePwdGenerator;