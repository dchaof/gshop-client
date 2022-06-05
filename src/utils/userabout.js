

//这个函数是让用户获取到唯一的标识
//第一步，先从localStorahe中获取，如果没有
//第二步，再创建uuid创建新的，并且保存到localStorage 中
import { v4 as uuidv4 } from 'uuid';

function getUserTempId(){
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    if(!userTempId){
        userTempId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        localStorage.setItem('USERTEMPID_KEY',userTempId)
    }
    return userTempId
}


export {
    getUserTempId
}