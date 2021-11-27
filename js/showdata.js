const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getForm = document.querySelector('#form');

const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');


const getArticle_name = document.querySelector('#article_name');
const getArticle_detail = document.querySelector('#article_detail');

const getArticle_name = document.querySelector('#vdo_name');
const getArticle_detail = document.querySelector('#vdo_detail');



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        const email = localStorage.getItem('email');

        db.collection('users').doc(email).get().then((result) => {
            console.log(result.data());
            getName.innerHTML = result.data().name;
            getEmail.innerHTML = result.data().email;
            getPhone.innerHTML = result.data().phone;
            getDetail.innerHTML = result.data().detail;
            console.log(result.id);
        })

       

        db.collection('videos').doc().get().then((result) => {

            getVideo_name.innerHTML = result.data().vdo_name;
            getVideo_detail.innerHTML = result.data().vdo_detail;
            
        })


        db.collection('articles').get().then((snapshot) => {
           
            snapshot.forEach(doc => {
                showData(doc);
            });
            
           
        })



        function showData(doc){

            getArticle_name.innerHTML = doc.data().article_name;
            getArticle_detail.innerHTML = doc.data().article_detail;
            console.log(doc.id);
    
        }



       


    }
}
)



// firebase.auth().onAuthStateChanged(function (user) {
//    if (user) {


//       db.collection('videos').get().then((snapshot) => {
//          snapshot.forEach(doc => {
//             showdata(doc)
//          });

//       })




//       function showdata(doc) {


//          const email = localStorage.getItem('email');
//          if (email == doc.data().email) {

//             console.log(doc.data().vdo_name);
//             console.log(doc.data().vdo_detail);
//             getVideo_name.innerHTML = doc.data().vdo_name;
//             getVideo_detail.innerHTML = doc.data().vdo_detail;

        

//          } else {
//             console.log("faile");
//          }



//       }

//    } else {

//    }
// }
// )