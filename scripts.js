var hapinessProgress = 50;
var energyProgress = 50;
var hugnerProgress = 50;

const dancingCat = `<div class="cat">
    <div class="cat-ear left-ear"></div>
    <div class="cat-ear right-ear"></div>
    <div class="cat-face">
      <div class="cat-eye left-eye">
        <div class="pupil"></div>
      </div>
      <div class="cat-eye right-eye">
        <div class="pupil"></div>
      </div>
      <div class="cat-nose"></div>
      <div class="cat-mouth"></div>
      <div class="cat-whiskers">
        <div class="whisker whisker-left-1"></div>
        <div class="whisker whisker-left-2"></div>
        <div class="whisker whisker-left-3"></div>
        <div class="whisker whisker-right-1"></div>
        <div class="whisker whisker-right-2"></div>
        <div class="whisker whisker-right-3"></div>
      </div>
    </div>
    <div class="cat-body">
      <div class="cat-tail"></div>
      <div class="cat-legs">
        <div class="cat-leg leg-front-left"></div>
        <div class="cat-leg leg-front-right"></div>
        <div class="cat-leg leg-back-left"></div>
        <div class="cat-leg leg-back-right"></div>
      </div>
    </div>
  </div>`;

const happyCat = `<div class="cat">
    <div class="cat-ear left-ear"></div>
    <div class="cat-ear right-ear"></div>
    <div class="cat-face">
      <div class="cat-eye left-eye">
        <div class="pupil"></div>
      </div>
      <div class="cat-eye right-eye">
        <div class="pupil"></div>
      </div>
      <div class="cat-nose"></div>
      <div class="cat-mouth"></div>
      <div class="cat-whiskers">
        <div class="whisker whisker-left-1"></div>
        <div class="whisker whisker-left-2"></div>
        <div class="whisker whisker-left-3"></div>
        <div class="whisker whisker-right-1"></div>
        <div class="whisker whisker-right-2"></div>
        <div class="whisker whisker-right-3"></div>
      </div>
    </div>
    <div class="cat-body">
      <div class="cat-tail"></div>
      <div class="cat-legs">
        <div class="cat-leg leg-front-left"></div>
        <div class="cat-leg leg-front-right"></div>
        <div class="cat-leg leg-back-left"></div>
        <div class="cat-leg leg-back-right"></div>
      </div>
    </div>
  </div>`;

const sleepingCat = `<div class="cat">
    <div class="cat-ear left-ear"></div>
    <div class="cat-ear right-ear"></div>
    <div class="cat-face">
      <div class="cat-eye left-eye">
        <div class="closed-eye"></div>
      </div>
      <div class="cat-eye right-eye">
        <div class="closed-eye"></div>
      </div>
      <div class="cat-nose"></div>
      <div class="cat-mouth happy"></div>
      <div class="cat-whiskers">
        <div class="whisker whisker-left-1"></div>
        <div class="whisker whisker-left-2"></div>
        <div class="whisker whisker-left-3"></div>
        <div class="whisker whisker-right-1"></div>
        <div class="whisker whisker-right-2"></div>
        <div class="whisker whisker-right-3"></div>
      </div>
    </div>
    <div class="cat-body">
      <div class="cat-tail"></div>
      <div class="cat-legs">
        <div class="cat-leg leg-front-left"></div>
        <div class="cat-leg leg-front-right"></div>
        <div class="cat-leg leg-back-left"></div>
        <div class="cat-leg leg-back-right"></div>
      </div>
    </div>
  </div>`;

const sadCat = `<div class="cat">
    <div class="cat-ear left-ear"></div>
    <div class="cat-ear right-ear"></div>
    <div class="cat-face">
      <div class="cat-eye left-eye">
        <div class="pupil"></div>
      </div>
      <div class="cat-eye right-eye">
        <div class="pupil"></div>
      </div>
      <div class="cat-nose"></div>
      <div class="cat-mouth sad"></div>
      <div class="cat-whiskers">
        <div class="whisker whisker-left-1"></div>
        <div class="whisker whisker-left-2"></div>
        <div class="whisker whisker-left-3"></div>
        <div class="whisker whisker-right-1"></div>
        <div class="whisker whisker-right-2"></div>
        <div class="whisker whisker-right-3"></div>
      </div>
    </div>
    <div class="cat-body">
      <div class="cat-tail"></div>
      <div class="cat-legs">
        <div class="cat-leg leg-front-left"></div>
        <div class="cat-leg leg-front-right"></div>
        <div class="cat-leg leg-back-left"></div>
        <div class="cat-leg leg-back-right"></div>
      </div>
    </div>
  </div>`;

function loadContent()  {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'happy.css';
    document.head.appendChild(link);
    document.getElementById('pet-div').innerHTML = happyCat;

    document.getElementById('hungerIndex').setAttribute('aria-valuenow',hugnerProgress);
    document.getElementById('hugnerProgress').style.width = hugnerProgress + '%';
    document.getElementById('hugnerProgress').innerHTML = hugnerProgress + '%';
    
    document.getElementById('hapinessIndex').setAttribute('aria-valuenow',hapinessProgress);
    document.getElementById('hapinessProgress').style.width = hapinessProgress + '%';
    document.getElementById('hapinessProgress').innerHTML = hapinessProgress + '%';

    document.getElementById('energyIndex').setAttribute('aria-valuenow',energyProgress);
    document.getElementById('energyProgress').style.width = energyProgress + '%';
    document.getElementById('energyProgress').innerHTML = energyProgress + '%';

    window.setInterval(modifyPetAttributes,3000);
    window.setInterval(modifyPetMood,2000);
}

function feedTheCat()   {
    let currentHunger = document.getElementById('hungerIndex').getAttribute('aria-valuenow');
    let currentHappiness = document.getElementById('hapinessIndex').getAttribute('aria-valuenow');
    let currentEnergy = document.getElementById('energyIndex').getAttribute('aria-valuenow');
    console.log('current hunger ', currentHunger);
    console.log('current happiness ', currentHappiness);
    console.log('current energy ', currentEnergy);
    
    if(currentHunger > 0)   {
        document.getElementById('hungerIndex').setAttribute('aria-valuenow',(currentHunger - 5));
        document.getElementById('hugnerProgress').style.width = (currentHunger - 5) + '%';
        document.getElementById('hugnerProgress').innerHTML = (currentHunger - 5) + '%';
    }

    if(currentHappiness < 100)  {
        currentHappiness =  Number.parseInt(currentHappiness) + 5;
        document.getElementById('hapinessIndex').setAttribute('aria-valuenow',currentHappiness);
        document.getElementById('hapinessProgress').style.width = currentHappiness + '%';
        document.getElementById('hapinessProgress').innerHTML = currentHappiness + '%';
    }

    if(currentEnergy < 100) {
        currentEnergy = Number.parseInt(currentEnergy) + 5;
        document.getElementById('energyIndex').setAttribute('aria-valuenow',currentEnergy);
        document.getElementById('energyProgress').style.width = currentEnergy + '%';
        document.getElementById('energyProgress').innerHTML = currentEnergy + '%';
    }
}

function sleepTheCat()  {
    var linkNode = document.getElementsByTagName('link')[1];
    linkNode.parentNode.removeChild(linkNode);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'sleeping.css';
    document.head.appendChild(link);
    document.getElementById('pet-div').innerHTML = sleepingCat;
}

function danceTheCat()  {
    var currentEnergy = document.getElementById('energyIndex').getAttribute('aria-valuenow');
    if(Number.parseInt(currentEnergy) < 40) {
       window.alert('Low on energy');
    }
    var linkNode = document.getElementsByTagName('link')[1];
    linkNode.parentNode.removeChild(linkNode);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'dance.css';
    document.head.appendChild(link);
    document.getElementById('pet-div').innerHTML = dancingCat;
}

function modifyPetAttributes()  {
    let currentHunger = document.getElementById('hungerIndex').getAttribute('aria-valuenow');
    let currentHappiness = document.getElementById('hapinessIndex').getAttribute('aria-valuenow');
    let currentEnergy = document.getElementById('energyIndex').getAttribute('aria-valuenow');

    if(currentHunger < 100)   {
        currentHunger = Number.parseInt(currentHunger) + 5;
        document.getElementById('hungerIndex').setAttribute('aria-valuenow',currentHunger);
        document.getElementById('hugnerProgress').style.width = currentHunger + '%';
        document.getElementById('hugnerProgress').innerHTML = currentHunger + '%';
    }

    if(currentHappiness > 0)  {
        currentHappiness =  Number.parseInt(currentHappiness) - 5;
        document.getElementById('hapinessIndex').setAttribute('aria-valuenow',currentHappiness);
        document.getElementById('hapinessProgress').style.width = currentHappiness + '%';
        document.getElementById('hapinessProgress').innerHTML = currentHappiness + '%';
    }

    if(currentEnergy > 0) {
        currentEnergy = Number.parseInt(currentEnergy) - 5;
        document.getElementById('energyIndex').setAttribute('aria-valuenow',currentEnergy);
        document.getElementById('energyProgress').style.width = currentEnergy + '%';
        document.getElementById('energyProgress').innerHTML = currentEnergy + '%';
    }
}

function modifyPetMood()    {
    let currentHunger = document.getElementById('hungerIndex').getAttribute('aria-valuenow');
    let currentHappiness = document.getElementById('hapinessIndex').getAttribute('aria-valuenow');

    if(Number.parseInt(currentHunger) > 50 || Number.parseInt(currentHappiness) <= 40) {
        var linkNode = document.getElementsByTagName('link')[1];
        linkNode.parentNode.removeChild(linkNode);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'sad.css';
        document.head.appendChild(link);
        document.getElementById('pet-div').innerHTML = sadCat;
    }
    if(Number.parseInt(currentHunger) < 40 && Number.parseFloat(currentHappiness) >= 50) {
        var linkNode = document.getElementsByTagName('link')[1];
        linkNode.parentNode.removeChild(linkNode);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'happy.css';
        document.head.appendChild(link);
        document.getElementById('pet-div').innerHTML = happyCat;
    }
}