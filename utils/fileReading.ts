export default function fileReading(multiple:boolean,files:File[]):Promise<string|null>{
    return new Promise((resolve,reject)=>{
        let fileReader:FileReader = new FileReader();
        if(!multiple){
            if(files[0] && files[0].type.includes("image")){
                fileReader.readAsDataURL(files[0]);
            }else if(files[0].type.includes("text")){
                fileReader.readAsText(files[0]);
            }
        }
        fileReader.addEventListener("load",(e)=>{
            resolve(fileReader.result as string);
        })
        fileReader.addEventListener("error",(e)=>{
            reject("error loading");
        })
    })
}