// const getVideo_name = document.querySelector('#vdo_name');
// const getVideo_detail = document.querySelector('#vdo_detail');




function createVdoPost() {

   // Get vdo
   video = document.getElementById('video').value;
   vdo_name = document.getElementById('vdo_name').value;
   vdo_detail = document.getElementById('vdo_detail').value;



   db.collection("videos").doc().set({
      video: document.getElementById('video').value,
      vdo_name: document.getElementById('vdo_name').value,
      vdo_detail: document.getElementById('vdo_detail').value,

   });

   selectShow()
   

}


function createArticlePost() {

   // // Get article
   file_image = document.getElementById('file_image').value;
   artcle_name_name = document.getElementById('artcle_name').value;
   artcle_name_detail = document.getElementById('artcle_detail').value;


   db.collection("articles").doc().set({
      
      file_image: document.getElementById('file_image').value,
      artcle_name_name: document.getElementById('artcle_name').value,
      artcle_detail: document.getElementById('artcle_detail').value,

   });


   selectShow()

}

function createProductPost() {

   // // Get product
   pd_image = document.getElementById('pd_image').value;
   pd_name = document.getElementById('pd_name').value;
   pd_detail = document.getElementById('pd_detail').value;
   facebook = document.getElementById('facebook').value;
   shop_link = document.getElementById('shop_link').value;


   db.collection("products").doc().set({
      pd_image: document.getElementById('pd_image').value,
      pd_name: document.getElementById('pd_name').value,
      pd_detail: document.getElementById('pd_detail').value,
      facebook: document.getElementById('facebook').value,
      shop_link: document.getElementById('shop_link').value,
   });

   selectShow()


}


function createCommentPost() {

   // // Get comment
   comment_detail = document.getElementById('comment_detail').value;


   db.collection("comments").doc().set({
      comment_detail: document.getElementById('comment_detail').value,

   });
   selectShow()
}





function selectShow(){


firebase.auth().onAuthStateChanged(function (user) {
   if (user) {


      db.collection('videos').get().then((snapshot) => {
         snapshot.forEach(doc => {
            show(doc)
         });

      })

      db.collection('articles').get().then((snapshot) => {
         snapshot.forEach(doc => {
            show(doc)
         });

      })

      db.collection('products').get().then((snapshot) => {
         snapshot.forEach(doc => {
            show(doc)
         });

      })

      db.collection('comments').get().then((snapshot) => {
         snapshot.forEach(doc => {
            show(doc)
         });

      })

      function show(doc) {


         const videos = localStorage.getItem('videos');
        
         if (videos == doc.data().email) {

            console.log(doc.data().vdo_name);
            console.log(doc.data().vdo_detail);
            getVideo_name.innerHTML = doc.data().vdo_name;
            getVideo_detail.innerHTML = doc.data().vdo_detail;

         // } else if (email == doc.data().articles){
         //    console.log(doc.data().vdo_name);
         //    console.log(doc.data().vdo_detail);
         //    getVideo_name.innerHTML = doc.data().vdo_name;
         //    getVideo_detail.innerHTML = doc.data().vdo_detail;
         
         // } else if (email == doc.data().products){
         //    console.log(doc.data().vdo_name);
         //    console.log(doc.data().vdo_detail);
         //    getVideo_name.innerHTML = doc.data().vdo_name;
         //    getVideo_detail.innerHTML = doc.data().vdo_detail;
         
         // } else if (email == doc.data().comments){
         //    console.log(doc.data().vdo_name);
         //    console.log(doc.data().vdo_detail);
         //    getVideo_name.innerHTML = doc.data().vdo_name;
         //    getVideo_detail.innerHTML = doc.data().vdo_detail;
         
         }else {
            console.log("faill");
         }



      }

   } else {
      console.log("faile");
   }
}
)}