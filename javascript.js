const fragments = {
  r1D1: '<p>This sentence is made with a <code>&lt;p&gt;</code> tag but I can make it look like a <code>&lt;h5&gt;</code> tag by adding a "h5" class.</p>',
  r1D2: '',
  r1D3: '',
  r1D4: '',
  r2D1: '',
  r2D2: '',
  r2D3: '',
  r2D4: ''
};

const originalFragments = {
  r1D1: '<p class="h5">This sentence is made with a <code>&lt;p&gt;</code> tag but I can make it look like a <code>&lt;h5&gt;</code> tag by adding a "h5" class.</p>',
  r1D2: '',
  r1D3: '',
  r1D4: '',
  r2D1: '',
  r2D2: '',
  r2D3: '',
  r2D4: ''
};

function placeFragmentsOnR1D1() {
  document.getElementById("r1d1-example").innerHTML = fragments.r1D1;
};

function placeOriginalFragmentsOnR1D1() {
  document.getElementById("r1d1-example").innerHTML = originalFragments.r1D1;
};

function placeFragmentsOnR1D2() {
  document.getElementById("r1d2-example").innerHTML = fragments.r1D2;
};

function placeOriginalFragmentsOnR1D2() {
  document.getElementById("r1d2-example").innerHTML = originalFragments.r1D2;
};

function placeFragmentsOnR1D3() {
  document.getElementById("r1d3-example").innerHTML = fragments.r1D3;
};

function placeOriginalFragmentsOnR1D3() {
  document.getElementById("r1d3-example").innerHTML = originalFragments.r1D3;
};


