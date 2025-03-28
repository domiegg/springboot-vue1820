export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"作品类型","menuJump":"列表","tableName":"zuopinleixing"}],"menu":"作品类型管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除","查看评论"],"menu":"画师","menuJump":"列表","tableName":"huashi"}],"menu":"画师管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除","查看评论"],"menu":"画师作品","menuJump":"列表","tableName":"huashizuopin"}],"menu":"画师作品管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"约稿信息","menuJump":"列表","tableName":"yuegaoxinxi"}],"menu":"约稿信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","删除"],"menu":"稿件作品","menuJump":"列表","tableName":"gaojianzuopin"}],"menu":"稿件作品管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-album","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-rank","buttons":["修改","查看"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"画师列表","menuJump":"列表","tableName":"huashi"}],"menu":"画师模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","查看评论","约稿"],"menu":"画师作品列表","menuJump":"列表","tableName":"huashizuopin"}],"menu":"画师作品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","支付"],"menu":"约稿信息","menuJump":"列表","tableName":"yuegaoxinxi"}],"menu":"约稿信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","审核"],"menu":"稿件作品","menuJump":"列表","tableName":"gaojianzuopin"}],"menu":"稿件作品管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"画师列表","menuJump":"列表","tableName":"huashi"}],"menu":"画师模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","查看评论","约稿"],"menu":"画师作品列表","menuJump":"列表","tableName":"huashizuopin"}],"menu":"画师作品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"画师作品","menuJump":"列表","tableName":"huashizuopin"}],"menu":"画师作品管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","审核","交稿"],"menu":"约稿信息","menuJump":"列表","tableName":"yuegaoxinxi"}],"menu":"约稿信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除","修改"],"menu":"稿件作品","menuJump":"列表","tableName":"gaojianzuopin"}],"menu":"稿件作品管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"画师列表","menuJump":"列表","tableName":"huashi"}],"menu":"画师模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","查看评论","约稿"],"menu":"画师作品列表","menuJump":"列表","tableName":"huashizuopin"}],"menu":"画师作品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"画师","tableName":"huashi"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
