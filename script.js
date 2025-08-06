const scroller = scrollama();

scroller
  .setup({
    step: ".step",
    offset: 0.5,
    debug: false
  })
  .onStepEnter(response => {
    const step = response.index;

    document.querySelectorAll('.figure').forEach((img, i) => {
      if (step === 0) {
        img.style.opacity = 0; 
      } else {
        img.style.opacity = i === step ? 1 : 0;
      }
    });
  });