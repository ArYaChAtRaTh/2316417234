function startClassification() {

          navigator.mediaDevices.getUserMedia({ audio : true});
          classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QGTKezrFS/model.json" , modelReady);



}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error); 
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 225) + 1;
        random_number_g = Math.floor(Math.random() * 225) + 1;
        random_number_b = Math.floor(Math.random() * 225) + 1;
        document.getElementById("result_label").innerHTML = "I can hear" + results[0].label;
        document.getElementById ("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        

        img = document.getElementById('image1');
        

        if (results[0].label == "cat") {
            img.src = 'cat.jpg';
            
        }
        else if (results[0].label == "cow") {
            img.src = 'cow.jpg';
           
        }
        else if (results[0].label == "Dog") {
            img.src = 'Dog.jpg';
           
        }
        else  {
          
            img.src = 'https://thumbs.dreamstime.com/b/human-ear-close-up-any-hair-surrounding-42228446.jpg';
        
        }
        }
    }