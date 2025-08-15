

    const captions = {
      0: "Ethnic Map of BiH (Markotić et al., 1991). Image credits: Bosniak Institute - Adil Zulfikarpašić.",
      1: "Ethnic majority map produced in 1998 by the International Management Group. Image credits: Bosniak Institute - Adil Zulfikarpašić.",
      2: "Screenshot taken from the WPSU‘s Geospatial Revolution series, Episode 3, on the use of Powerscene technology during the Dayton peace agreement talks. Used with permission.",
      3: "BiH territorial division, image by VisLab."
    };

    const footnotes = {
      0: "1 This included delegations representing the interests of BiH and those representing alliances of Croat-Bosnian Croat and FR Yugoslavia-Bosnian Serb delegations. The composition of international delegations changed across the different peace talks, with EU members leading the initial peace talks (e.g. Vance-Owen and Contact Group proposal) and the US taking over in the final stages. The BiH official delegation was mainly designated by the international negotiators as ‘Bosnian Muslim’, but at most talks it included a more multiethnic representation of the country. See detailed chronologies of different peace talks aspects in Begić 1998, Cruickshanks 2022, Komšić 2013, and Klemencić 1994. ",
      1: "2 Ethnical majority map produced in 1996 by the International Management Group. Image credits: Bosniak Institute - Adil Zulfikarpašić.",
      2: "3 See e.g. the accounts of Holbrooke 1998 and Chollet 2007 where they discuss the power of this software to bring the emotions of the local parties under control. They claimed how Powerscene afforded precision in the delineation of territory, it also made the local participants aware (and intimidated) by the spatial intelligence possessed by the US (Branch 2017, Crampton 1996, see also PBS WPSU’s show Geospatial Revolution, ep. 3 on YouTube). While the US-centric narratives of Powerscene claim an enamoration with this technology in all local participants, it is difficult to find any mention of it in the accounts and writings by members of the BiH delegation. This begs the question of how important Powerscene really was for closing the agreement, or how much it was glorified retrospectively to justify the division as technologically devised.",
      3: "",
      4: "4 The ratio marked a moment of turning away from the idea of dividing BiH in three ethnic units, towards a model that proposed the union between Bosniaks and Bosnian Croats in a multiethnic unit. The percentage was based on a previous Milošević-Tuđman allocation deal which “became the basis for the territorial partition eventually agreed upon at the Dayton negotiations in November 1995. Rather than a three-way split, the divide was 51:49 since American coercive diplomacy over the intervening two years had changed the terms of a possible cartographic fix in Bosnia-Herzegovina” (Toal & Dahlman 2012, 154). The precise ratio was discussed across different peace plans as a tactic of producing a “more coherent map” (Toal and Dahlman 2012, 154) which would make the negotiation goals seem tangible and simple.",
      5: "5 Toal, Gerard, and Carl T. Dahlman. 2011. Bosnia Remade: Ethnic Cleansing and Its Reversal. Oxford University Press."
    };

     const scroller = scrollama();

 scroller
  .setup({ step: ".step", offset: 0.4 })
  .onStepEnter(response => {
    const step = response.element.getAttribute("data-step");

    // контейнер текущей секции
    const container = response.element.closest('.container');

    // меняем картинки ТОЛЬКО в этой секции
    container.querySelectorAll('.figure-container').forEach(fc => {
      const isActive = fc.getAttribute('data-step') === step;
      fc.style.opacity = isActive ? 1 : 0;
      if (isActive) {
        const captionEl = fc.querySelector('.caption');
        if (captionEl) captionEl.textContent = captions[step] || '';
      }
    });

    // меняем футнот в колонке этой же секции
    const footnoteEl = container.querySelector('.notes-column .footnote');
    if (footnoteEl) footnoteEl.textContent = footnotes[step] || '';
  });

    // Функция: следим за активной главой
const chapters = document.querySelectorAll('.chapter');
const navLinks = document.querySelectorAll('.chapter-link, #chapter-link-active');

function updateActiveChapter() {
  let currentChapter = 'intro'; 

  chapters.forEach(chapter => {
    const rect = chapter.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      currentChapter = chapter.id;
    }
  });

  navLinks.forEach(link => {
    const isActive = link.dataset.chapter === currentChapter;
    link.classList.toggle('active', isActive);
  });
}

scrollTarget.addEventListener('scroll', updateActiveChapter);
window.addEventListener('load', updateActiveChapter);
