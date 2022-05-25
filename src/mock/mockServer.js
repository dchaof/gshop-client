/* 
引入mockjs
*/

import Mock from 'mockjs'
import floors from './floors.json'
import recommends from './recommends.json'

//创建接口

Mock.mock('/mock/recommends',{code:200,data:recommends})

Mock.mock('/mock/floors',{code:200,data:floors})

//测试
console.log("MockServer")