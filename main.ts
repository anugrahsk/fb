class Facebook{

    _Profilename:string;
    _Studied:string;
    _Lives:string;
    _From:string;
    _About:string;
    _Birthday:string;
    _Age:number;
    _Contact:number;
    _Friends:number;
    _Activity:number;
    _Post:number;
    _Photos:number;

    constructor(Profilename:string,Studied:string,Lives:string,From:string,About:string,Birthday:string,Age:number,Contact:number,Friends:number,Activity:number,Post:number,Photos:number){
        this._Profilename=Profilename;
        this._Studied=Studied;
        this._Lives=Lives;
        this._From=From;
        this._About=About;
        this._Birthday=Birthday;
        this._Age=Age;
        this._Contact=Contact;
        this._Friends=Friends;
        this._Activity=Activity;
        this._Post=Post;
        this._Photos=Photos;
    }

}

class anu extends Facebook{
    constructor(Profilename:string,Studied:string,Lives:string,From:string,About:string,Birthday:string,Age:number,Contact:number,Friends:number,Activity:number,Post:number,Photos:number){
        super(Profilename,Studied,Lives,From,About,Birthday,Age,Contact,Friends,Activity,Post,Photos);
    }

    getfb1=()=>{
        return this._Profilename;
    }
    getfb2=()=>{
        return this._Studied;
    }
    getfb3=()=>{
        return this._Lives;
    }
    getfb4=()=>{
        return this._From;
    }
    getfb5=()=>{
        return this._About;
    }
    getfb6=()=>{
        return this._Birthday;
    }
    getfb7=()=>{
        return this._Age;
    }
    getfb8=()=>{
        return this._Contact;
    }
    getfb9=()=>{
        return this._Friends;
    }
    getfb10=()=>{
        return this._Activity;
    }
    getfb11=()=>{
        return this._Post;
    }
    getfb12=()=>{
        return this._Photos;
    }
    getfb13=()=>{
        console.log('+add instagram & other websites');
    }
    getfb14=()=>{
        console.log('whats on your mind');
    }
    getfb15=()=>{
        console.log('post from friends');
    }
}

class shah extends Facebook{
    constructor(Profilename:string,Studied:string,Lives:string,From:string,About:string,Birthday:string,Age:number,Contact:number,Friends:number,Activity:number,Post:number,Photos:number){
        super(Profilename,Studied,Lives,From,About,Birthday,Age,Contact,Friends,Activity,Post,Photos);
    }

    
    getfb1=()=>{
        return this._Profilename;
    }
    getfb2=()=>{
        return this._Studied;
    }
    getfb3=()=>{
        return this._Lives;
    }
    getfb4=()=>{
        return this._From;
    }
    getfb5=()=>{
        return this._About;
    }
    getfb6=()=>{
        return this._Birthday;
    }
    getfb7=()=>{
        return this._Age;
    }
    getfb8=()=>{
        return this._Contact;
    }
    getfb9=()=>{
        return this._Friends;
    }
    getfb10=()=>{
        return this._Activity;
    }
    getfb11=()=>{
        return this._Post;
    }
    getfb12=()=>{
        return this._Photos;
    }
    getfb13=()=>{
        console.log('+add instagram & other websites');
    }
    getfb14=()=>{
        console.log('whats on your mind');
    }
    getfb15=()=>{
        console.log('post from friends');
    }

}
let first= new anu("Anugrah Sunit Kispotta","BPUT Orissa","Noida","Jharkhand","Techie interested in new thechnologies","2nd jan 1995",23,846921266,355,10,200,50);
let call1=console.log('Profile Name-'+first.getfb1()); console.log('Studied-'+first.getfb2());console.log('Lives In-'+first.getfb3());console.log('From-'+first.getfb4());console.log('About-'+first.getfb5());console.log('DOB-'+first.getfb6());console.log('Age-'+first.getfb7());console.log('Contact-'+first.getfb8());console.log('Friends-'+first.getfb9());console.log('Activity-'+first.getfb10());console.log('Post-'+first.getfb11());console.log('Photos-'+first.getfb12());console.log("\n"); 

let second= new anu("Md Shahrukh","BPUT Orissa","Bhubnashwar","Jharkhand","hardware is life","22nd june 1996",23,84658217,1000,25,350,75);
let call2=console.log('Profile Name-'+second.getfb1()); console.log('Studied-'+second.getfb2());console.log('Lives In-'+second.getfb3());console.log('From-'+second.getfb4());console.log('About-'+second.getfb5());console.log('DOB-'+second.getfb6());console.log('Age-'+second.getfb7());console.log('Contact-'+second.getfb8());console.log('Friends-'+second.getfb9());console.log('Activity-'+second.getfb10());console.log('Post-'+second.getfb11());console.log('Photos-'+second.getfb12());console.log("\n"); 


