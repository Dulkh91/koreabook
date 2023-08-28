        let image =""
        for(let i=1; i<278; i++){
            
            image+= "<img src=\"https://nuri.iksi.or.kr/e-book/catImage/977/"+("00"+i).substr(-3)+".jpg\"  width=\'100%'>"
    
        }  
        document.getElementById('myText').innerHTML = image
        // window.addEventListener('scroll', () => {
        // console.log(document.documentElement.scrollTop, document.body.scrollTop)
        window.addEventListener('scroll', ()=>{
            console.log(document.documentElement.scrollTop)
            let a = 0
            a = document.documentElement.scrollTop / 600
            console.log("page:"+a)
            
        } )