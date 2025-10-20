mapboxgl.accessToken = 'pk.eyJ1IjoiaWFyb3NsYXYtYm9yZXRza2lpLXpvaXMiLCJhIjoiY2xoZzhpMzY5MHpnNTNlbzQ1cGdqbXd2NCJ9.JhdXZ2bLRLDTlAndKmkZng'; // замени на свой


const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/iaroslav-boretskii-zois/cmffshokc000901qr2z6f6vgm', 
  center: [17.66, 43.84],
  zoom: 6.9
});

map.scrollZoom.disable();

map.on('load', () => {
  const layers = map.getStyle().layers;

  const allowedLayers = [
    'Country Borders',
    'Potential Protected Areas',
    'Protected Areas',
    'Woods',
    'Rivers'
  ];


  const userLayers = layers.filter(layer => allowedLayers.includes(layer.id));


  const menu = document.createElement('div');
  menu.id = 'menu';
  map.getContainer().appendChild(menu);


  userLayers.forEach(layer => addLayerToMenu(layer, menu));
});

function addLayerToMenu(layer, menu) {
  const label = document.createElement('label');
  label.htmlFor = layer.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = layer.id;


  const visibility = map.getLayoutProperty(layer.id, 'visibility');
  checkbox.checked = visibility !== 'none';

  checkbox.onchange = () => {
    map.setLayoutProperty(
      layer.id,
      'visibility',
      checkbox.checked ? 'visible' : 'none'
    );
  };

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(layer.id));
  menu.appendChild(label);
}





    const captions = {
      0: "Ethnic Map of BiH (Markotić et al., 1991). Image credits: Bosniak Institute - Adil Zulfikarpašić.",
      1: "Ethnic majority map produced in 1998 by the International Management Group. Image credits: Bosniak Institute - Adil Zulfikarpašić.",
      2: "Screenshot taken from the WPSU‘s Geospatial Revolution series, Episode 3, on the use of Powerscene technology during the Dayton peace agreement talks. Used with permission.",
      3: "",
      4: "",
      5: "Click on an area on the map to learn more."
    };

    const footnotes = {
      0: "1 This included delegations representing the interests of BiH and those representing alliances of Croat-Bosnian Croat and FR Yugoslavia-Bosnian Serb delegations. The composition of international delegations changed across the different peace talks, with EU members leading the initial peace talks (e.g. Vance-Owen and Contact Group proposal) and the US taking over in the final stages. The BiH official delegation was mainly designated by the international negotiators as ‘Bosnian Muslim’, but at most talks it included a more multiethnic representation of the country. See detailed chronologies of different peace talks aspects in Begić 1998, Cruickshanks 2022, Komšić 2013, and Klemencić 1994. ",
      1: "2 Choropleth maps are used dominantly and widely even though this model is characterised by multiple limitations (Crampton 2009, 29) such as those of neglecting variations in population density between different bounded areas, e.g. municipalities.",
      2: "3 See e.g. the accounts of Holbrooke 1998 and Chollet 2007 where they discuss the power of this software to bring the emotions of the local parties under control. They claimed how Powerscene afforded precision in the delineation of territory, it also made the local participants aware (and intimidated) by the spatial intelligence possessed by the US (Branch 2017, Crampton 1996, see also PBS WPSU’s show Geospatial Revolution, ep. 3 on YouTube). While the US-centric narratives of Powerscene claim an enamoration with this technology in all local participants, it is difficult to find any mention of it in the accounts and writings by members of the BiH delegation. This begs the question of how important Powerscene really was for closing the agreement, or how much it was glorified retrospectively to justify the division as technologically devised.",
      3: "",
      4: "",
      5: "5 Toal, Gerard, and Carl T. Dahlman. 2011. Bosnia Remade: Ethnic Cleansing and Its Reversal. Oxford University Press.",
      6: "6 Holbrooke, Richard. 1998. To End a War. Random House Publishing Group. <p> 7 Chollet, Derek. 2007. The Road to the Dayton Accords: A Study of American Statecraft. Palgrave Macmillan.",
      7: "8 Komšić, Ivo. 2013. The Survived Country. Dividing Bosnia and Herzegovina. Who, When, Where. Synopsis. <p> 9 Holbrooke, Richard. 1998. To End a War. Random House Publishing Group.",
      8: "10 Begić, Kasim. 1997. Bosna i Hercegovina od Vanceove misije do Daytonskog sporazuma (1991-1996). Bosanska Knjiga. <p> 11 Komšić, Ivo. 2013. The Survived Country. Dividing Bosnia and Herzegovina. Who, When, Where. Synopsis.",
      9: "12 Holbrooke, Richard. 1998. To End a War. Random House Publishing Group. <p> 13 Chollet, Derek. 2007. The Road to the Dayton Accords: A Study of American Statecraft. Palgrave Macmillan.",
      10: "14 Holbrooke, Richard. 1998. To End a War. Random House Publishing Group."  
    };



function safeFlyTo(options) {
  if (!map) return;
  if (!map.loaded()) {
    map.once('idle', () => map.flyTo(options));
  } else {
    map.flyTo(options);
  }
}

   const stepActions = {
  "6": ()  => {

    map.setLayoutProperty('IEBL Lin', 'visibility', 'visible');
    map.setLayoutProperty('IEBL Line Thin', 'visibility', 'visible');

    safeFlyTo({
      center: [17.66, 43.84],
      zoom: 6.9,
      speed: 2.6,
      curve: 1.2,
      essential: true
      
    });
  },
  "7": () => {

    map.setLayoutProperty('IEBL Lin', 'visibility', 'visible');
    map.setLayoutProperty('IEBL Line Thin', 'visibility', 'visible');

    safeFlyTo({
      center: [17.44700882048129, 44.40013884214935],
      zoom: 12.5,
      speed: 0.8,
      curve: 1.2,
      essential: true
    });
  },
  "8": () => {

    map.setLayoutProperty('IEBL Lin', 'visibility', 'none');
    map.setLayoutProperty('IEBL Line Thin', 'visibility', 'visible');

    safeFlyTo({
      center: [18.347649, 43.815554],
      zoom: 13.5,
      speed: 0.8,
      curve: 1.2,
      essential: true
    });
  }
};

const scroller = scrollama();


  
function getPixelOffset(px) {
  return px / window.innerHeight;
}


scroller
  .setup({ step: ".step", offset: getPixelOffset(550) })
  .onStepEnter(response => {
    const step = response.element.getAttribute("data-step");
    console.log("ENTER STEP:", step, response.element);
   let container = response.element.closest('.container');
if (!container) container = document; 

container.querySelectorAll('.figure-container').forEach(fc => {
  const isActive = fc.getAttribute('data-step') === step;
  fc.style.opacity = isActive ? 1 : 0;
  if (isActive) {
    const captionEl = fc.querySelector('.caption');
    if (captionEl) captionEl.textContent = captions[step] || '';
  }
});

 
    if (step === "5" && manualFootnote) {

      return;
    }

    const footnoteEl = container.querySelector('.notes-column .footnote');
    if (footnoteEl) footnoteEl.innerHTML = footnotes[step] || '';

      if (stepActions[step]) {
      stepActions[step]();
    }

    // ...после footnotes и прочего
hideHoverNoteOnOtherSteps(step);


  });


  
const navLinks = document.querySelectorAll('.chapter-link');
const sections = document.querySelectorAll('.chapter-wrapper[data-chapter]');
const pageTitleEl = document.querySelector('.page-title');

function updateActiveChapter() {
  let current = null;

  sections.forEach(sec => {
    const r = sec.getBoundingClientRect();
    const lineY = window.innerHeight * 0.35;

    if (r.top <= lineY && r.bottom >= lineY) {
      current = sec;
    }
  });

  if (current) {
    const newTitle = current.dataset.title;
    if (newTitle && pageTitleEl.textContent !== newTitle) {
      pageTitleEl.textContent = newTitle;
    }


    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.chapter === current.dataset.chapter);
    });
  }
}

window.addEventListener('scroll', updateActiveChapter, { passive: true });
window.addEventListener('load', updateActiveChapter);



document.addEventListener("DOMContentLoaded", () => {
  const areaContents = {
    ozren: {
      title: "MOUNTAINS AS SACRIFICES: Ozren and Bjelasnica",
      text: `In the last rounds of territorial swaps taken to reach the 51:49 ratio, Bosnian mountains (e.g. Ozren and Bjelašnica) were easily given away as a sacrifice to gain ‘more important’ land (Komšić 2013, 434<sup>8</sup>)
      <p>
      Since significant "portion of the terrain in Bosnia consisted of sparsely inhabited mountain areas ("worthless land" in Silajdžić’s dismissive phrase), there was room for some compromise, but not much.” (Holbrooke 1998, 296<sup>9</sup>)`
    },
    clark: {
      title: "CLARK CORRIDOR",
      text: `""(...) every detail of the area between Sarajevo and Goražde. The road, the hydroelectric plants, the destroyed mosques, the small village along the road where General Mladić came from - all were discussed with passion and anger”. (Holbrooke 1998, 281<sup>6</sup>)
      <p>
      Milosevic had offered the Bosnians a thin two-mile road corridor to connect Sarajevo to Gorazde, which, as Clark’s PowerScene tour of the mountainous terrain revealed, was completely unviable. After two hours and a bottle of Scotch (of which Milosevic consumed four glasses), they reached an agreement on a wider corridor through the mountainous terrain. “We have found our road,” Milosevic pronounced. Because of the circumstances surrounding this event, many began to call this agreement, suitably, as the “Scotch Road” or the “Clark Corridor.” Although Holbrooke deliberately downplayed this as a “minor concession”—and dismissed the influence that alcohol might have had over Milosevic’s decisionmaking— it did represent the first substantial breakthrough on a key issue in days. The American team hoped that it might be the first crack in the dam blocking a final settlement. (Chollet 2007<sup>7</sup>)`
    },
    pocket: {
      title: "POSAVINA POCKET",
      text: `“Tuđman agreed to give 75 percent of the egg if muslims would give some of their land up and he could get back part of the Posavina pocket (Holbrooke 1998, 299<sup>14</sup>). Now Muslims had to give back 1 percent of their land - but this was not an issue, since this was land that they had been given in the last few days - "theoretical land" as they called it.”`
    },
    egg: {
      title: "THE EGG",
      text: `“He drew a large egg-shaped area in western Bosnia and offered the land to RS. Mountainous, lightly populated Serb region south of Ključ taken over during Croat offensive - what Silajdžić meant ""when he talked of "worthless land". Because of its shape, Hill dubbed it ""the egg"" while Milošević, thinking it resembled Spain, called it "the Iberian peninsula"...“ (Holbrooke 1998, 299<sup>12</sup>)
      <p>
      “The Federation would give Srpska a wide swath of territory in a mountainous, relatively unpopulated area in western Bosnia. Since this egg-shaped area had few towns (which both sides were reluctant to give away), and had been recently captured during the Croat military offensive, the exchange seemed fair.” (Chollet 2007<sup>13</sup>)`
    },
    croissant: {
      title: "BELLY/CROISSANT",
      text: `In West Herzegovina, Franjo Tuđman was committed to fattening up the “Croatian belly” (Begić <sup>10</sup>) or “croissant” (Komšić 2013<sup>11</sup>), the area which would pragmatically expand Croatian borders.`
    }
  };

const footnoteIndex = {
  clark: 6,
  ozren: 7,
  croissant: 8,
  egg: 9,
  pocket: 10
};

const ids = ["ozren", "clark", "pocket", "egg", "croissant"];
  const titleBox = document.getElementById("map-title");
  const textBox = document.getElementById("map-paragraph");
  

  const chapter = document.querySelector('#chapter-1');
  const footnoteBox = chapter.querySelector(".notes-column .footnote");


  const defaultTitle = titleBox.innerHTML;
  const defaultText = textBox.innerHTML;
  const defaultFootnote = footnoteBox.innerHTML;

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", () => {
        manualFootnote = true;

        if (el.classList.contains("active")) {

          el.classList.remove("active");
          titleBox.innerHTML = defaultTitle;
          textBox.innerHTML = defaultText;
          footnoteBox.innerHTML = defaultFootnote;
          manualFootnote = false;
          return;
        }


        ids.forEach(otherId => {
          const otherEl = document.getElementById(otherId);
          if (otherEl) otherEl.classList.remove("active");
        });


        el.classList.add("active");
        titleBox.innerHTML = areaContents[id].title;
        textBox.innerHTML = areaContents[id].text;

        const idx = footnoteIndex[id];
        if (idx !== undefined) {
          footnoteBox.innerHTML = `<p>${footnotes[idx]}</p>`;
        }
      });
    }
  });
});
