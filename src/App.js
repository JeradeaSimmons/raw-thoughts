
import './App.css';





function App() {

  



  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p>
          RAW THOUGHTS PODCAST
        </p>
        </div>
        <div class="">
          <a class="selectable" title="Facebook Link" href="https://www.facebook.com/makenzie.tiegs208"><i
              class="mdi mdi-facebook text-dark"></i></a>
          <a class="selectable" href="https://www.instagram.com/rawthoughts.podcast/"><i
              class="mdi mdi-instagram text-dark"></i></a>
          <a class="selectable" href="https://linktr.ee/rawthoughts.podcast"><i
              class="mdi mdi-link text-dark"></i></a>
          <a class="selectable" href="https://www.youtube.com/channel/UCIQkzGm10CBfiqaOokJWygg"><i
              class="mdi mdi-youtube text-dark"></i></a>
          <a class="selectable" href="https://open.spotify.com/show/5Q324MLEVXPUMk6JnaNgXa"><i
              class="mdi mdi-spotify text-dark"></i></a>
              
              
      

          </div>
        
      
      </header>
      
      <div class="row p-2">
        <iframe 
            src="https://open.spotify.com/embed/show/5Q324MLEVXPUMk6JnaNgXa?utm_source=generator&theme=0" width="100%" height="50%" title="Spotify"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      
      
      
      <div className="App-body">

        <div class="row d-flex justify-content-center p-2">


          <div class="col-md-7">
            <h3 class="mt-3">Everyone has a story in life and I am here to be a platform for people to be heard.
            </h3>
            <img src="Kenzie11.jpg" alt="Kenzie" class="img-fluid mt-3 rounded"></img>
             </div>
        </div>
          
          <div class="row d-flex justify-content-center">
            
            <div class="col-md-6">
              <h5 class="mt-3">
              Welcome to Raw Thoughts with MaKenzie Tiegs where I dive deep into conversations with people in the Treasure
              Valley to understand their life experiences. From a Paramedic to now a Real Estate Agent, connecting with
              people
              is my passion, Raw Thoughts is a place to feel safe, heard and welcomed. We all deserve to feel good in this
              life and I am here to share that goodness with others.
            </h5>
            </div>
            
          
          </div>
          
        <div class="row d-flex justify-content-center">
          <div class="col-md-4 text-black">
           <a href="https://docs.google.com/forms/d/1vhV4vzKYp8QXd_Tyy8slo5opL3r2lkLHYVYGRMQ3-m4/viewform?edit_requested=true"><button class="mt-4">
              <h3>Want to be a Guest?</h3>
            </button>
            </a>
            <h4 class="mt-5">  New Episodes EVERY Wednesday!</h4>
            <iframe width="100%" height="500vh" src="https://www.youtube.com/embed/cRE_uJxrVSA" title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
          </div>
        </div>


        <div class="row d-flex justify-content-center p-2">
          <div class="col-md-4">
          
            
            reviews
         

          </div>
              <div class="col-md-4">
                
                <h2>Send me a message today:</h2>
                
                <form action="https://getform.io/f/4646811f-4296-400b-a524-689f3b28f819" method="POST">
                  <p><input type="text" placeholder="Name" name="Name"></input></p>
                  <p><input type="number" placeholder="Phone Number" name="Phone Number"></input></p>
                  <p><input type="email" placeholder="Email" name="Email"></input></p>
                  <p><input  type="text" placeholder="Message" name="Message"></input></p>
                  <p><button class="rounded-pill" type="submit">SEND MESSAGE</button></p>
                  <p><button type="reset">RESET FORM</button></p>
                  
                </form>
              </div>
          
          
            </div>
</div>
      

     <footer className="App-footer">
      Brought to you by Raw Thoughts Podcast 2021
     </footer>


     
    </div>

    
  );
}

export default App;
