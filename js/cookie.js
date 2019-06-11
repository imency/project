function setCookie(name,value,iDay){
    var oDate=new Date()
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate
}
function getCookie(name){
    var arr=document.cookie.split('; ')
    // console.log(arr)
    for(var i=0;i<arr.length;i++){
        arr2=arr[i].split('=')
        if(name==arr2[0]){
        return arr2[1]
        }
    }
    
    return ''
}
function removeCookie(name){
    setCookie(name,1,-1)
}