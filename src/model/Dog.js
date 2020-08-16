import Axios from 'axios';

class Dog {
    constructor(breed) {
        this.breed = breed;
        this.imgUrl = '';
    }

    toString() {
        return `bread:${this.breed} imge:${this.imgUrl}`    
    }


    // loadRandImage(callBack) {
    //     Axios.get(`https://dog.ceo/api/breed/${this.breed}/images/random`)
    //         .then(res => {
    //             let img = res.data.message;
    //             if (img !== undefined) {
    //                 this.imgUrl = img;
    //                 if(callBack !== undefined){
    //                     callBack(img);
    //                 }
    //             }
    //         })
    // }
}

export default Dog;