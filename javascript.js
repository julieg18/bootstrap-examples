const fragments = {
  r1D1: '<p>This sentence is made with a <code>&lt;p&gt;</code> tag but I can make it look like a <code>&lt;h5&gt;</code> tag by adding a <code>.h5</code> class.</p>',
  r1D2: '<h5>I can make a heading with <small>faded secondary text using a <code>&lt;small&gt;</code> tag and a <code>.text-muted</code> class.</small></h5>',
  r1D3: '<h5>I can give this heading, or in fact any element, a black border with the classes, <code>.border</code> and <code>.border-dark</code>.</h5>',
  r2D1: '<blockquote><p>I can make a blockquote by wrapping any HTML with a <code>&lt;blockquote&gt;</code> tag and a <code>.blockquote</code> class.</p><footer>I can identify the source with a <code>&lt;footer&gt;</code> tag and a <code>blockquote</code> class.</footer></blockquote>',
  r2D2: '<p>I can change the color of the text and have different background colors with Bootstrap classes.</p><p>I can make this text red with the <code>.text-danger</code> class.</p><p>I can make the background color of the text red with the <code>.bg-danger</code> class.</p>',
  r2D3: '<p>I can make a <code>&lt;p&gt;</code> tag all uppercase with the class <code>.text-uppercase</code>.<p>i was written with lowercase letters.</p><p>I can capitalize a <code>&lt;p&gt;</code> tag by adding the class <code>.text-capitalize</code>: </p><p>i am written in lowercase.</p>',
  r3D1: '<p>I can make my <abbr title="HyperText Markup Language">HTML</abbr> abbrieviation with <code>&lt;abbr&gt;</code> tags and a <code>.initialism</code> class.</p>',
  r3D2: '<p>I made this text bold by adding a <code>.font-weight-bold</code> class.</p><p>I made this text with the class <code>.text-monospace</code></p><p>I made this text italic with the <code>.font-italic</code> class.</p>',
  r3D3: '<p>I can make a paragraph stand out by adding a <code>.lead</code> class.</p>',
  r4D1: '<p>Here is a badge I made with a <code>.badge</code> class and a <code>.badge-primary</code> class: <span>Badge</span> Here is a badge I made with a <code>.badge</code> class and a <code>.badge-success</code> class: <span>Badge</span></p>',
  r4D2: '<p>I can make a badge more round by adding a <code>.badge-pill</code> class along with the other badge classes: <span>Badge</span></p>',
  r4D3: '<p>I can turn a badge into a link by wrapping it in <code>&lt;a&gt;</code> tags instead of <code>&lt;span&gt;</code> tags: <a href="#">Badge</a></p>',
  r5D1: '<p>Like badges, buttons also have predefined styles. Here is a button I made with the classes <code>.btn</code> and <code>.btn-secondary</code>: <button>Button</button></p>',
  r5D2: '<p>I created a outline button with the classes, <code>.btn</code> and <code>.btn-outline-warning</code>: <button>Button</button></p>',
  r5D3: '<p>You can make small buttons using the <code>.btn-sm</code> class. You can make large buttons using the <code>.btn-lg</code> class. You can make a button that spans the full width of the parent element with the class <code>.btn-block</code>:</p><button>Small</button><button>Large</button><button>Block level</button>'
};

const originalFragments = {
  r1D1: '<p class="h5">This sentence is made with a <code>&lt;p&gt;</code> tag but I can make it look like a <code>&lt;h5&gt;</code> tag by adding a <code>.h5</code> class.</p>',
  r1D2: '<h5>I can make a heading with <small class="text-muted">faded secondary text using a <code>&lt;small&gt;</code> tag and a <code>.text-muted</code> class.</small></h5>',
  r1D3: '<h5 class="border border-dark">I can give this heading, or in fact any element, a black border with the classes, <code>.border</code> and <code>.border-dark</code>.</h5>',
  r2D1: '<blockquote class="blockquote"><p>I can make a blockquote by wrapping any HTML with a <code>&lt;blockquote&gt;</code> tag and a <code>.blockquote</code> class.</p><footer class="blockquote-footer">I can identify the source with a <code>&lt;footer&gt;</code> tag and a <code>blockquote</code> class.</footer></blockquote>',
  r2D2: '<p>I can change the color of the text and have different background colors with Bootstrap classes.</p><p class="text-danger">I can make this text red with the <code>.text-danger</code> class.</p><p class="bg-danger">I can make the background color of the text red with the <code>.bg-danger</code> class.</p>',
  r2D3: '<p>I can make a <code>&lt;p&gt;</code> tag all uppercase with the class <code>.text-uppercase</code>.<p class="text-uppercase">i was written with lowercase letters.</p><p>I can capitalize a <code>&lt;p&gt;</code> tag by adding the class <code>.text-capitalize</code>: </p><p class="text-capitalize">i am written in lowercase.</p>',
  r3D1: '<p>I can make my <abbr title="HyperText Markup Language" class="initialism">HTML</abbr> abbrieviation with <code>&lt;abbr&gt;</code> tags and a <code>.initialism</code> class.</p>',
  r3D2: '<p class="font-weight-bold">I made this text bold by adding a <code>.font-weight-bold</code> class.</p><p class="text-monospace">I made this text with the class <code>.text-monospace</code></p><p class="font-italic">I made this text italic with the <code>.font-italic</code> class.</p>',
  r3D3: '<p class="lead">I can make a paragraph stand out by adding a <code>.lead</code> class.</p>',
  r4D1: '<p>Here is a badge I made with a <code>.badge</code> class and a <code>.badge-primary</code> class: <span class="badge badge-primary">Badge</span>Here is a badge I made with a <code>.badge</code> class and a <code>.badge-success</code> class: <span class="badge badge-success">Badge</span></p>',
  r4D2: '<p>I can make a badge more round by adding a <code>.badge-pill</code> class along with the other badge classes: <span class="badge badge-danger badge-pill">Badge</span></p>',
  r4D3: '<p>I can turn a badge into a link by wrapping it in <code>&lt;a&gt;</code> tags instead of <code>&lt;span&gt;</code> tags: <a href="#" class="badge badge-info">Badge</a></p>',
  r5D1: '<p>Like badges, buttons also have predefined styles. Here is a button I made with the classes <code>.btn</code> and <code>.btn-secondary</code>: <button class="btn btn-secondary">Button</button></p>',
  r5D2: '<p>I created a outline button with the classes, <code>.btn</code> and <code>.btn-outline-warning</code>: <button class="btn btn-outline-warning">Button</button></p>',
  r5D3: '<p>You can make small buttons using the <code>.btn-sm</code> class. You can make large buttons using the <code>.btn-lg</code> class. You can make a button that spans the full width of the parent element with the class <code>.btn-block</code>:</p><button class="btn btn-sm btn-light">Small</button><button class="btn btn-lg btn-dark">Large</button><button class="btn btn-block btn-primary">Block level</button>'
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

function placeFragmentsOnR2D1() {
  document.getElementById("r2d1-example").innerHTML = fragments.r2D1;
};

function placeOriginalFragmentsOnR2D1() {
  document.getElementById("r2d1-example").innerHTML = originalFragments.r2D1;
};

function placeFragmentsOnR2D2() {
  document.getElementById("r2d2-example").innerHTML = fragments.r2D2
}

function placeOriginalFragmentsOnR2D2() {
  document.getElementById("r2d2-example").innerHTML = originalFragments.r2D2
}

function placeFragmentsOnR2D3() {
  document.getElementById("r2d3-example").innerHTML = fragments.r2D3;
};

function placeOriginalFragmentsOnR2D3() {
  document.getElementById("r2d3-example").innerHTML = originalFragments.r2D3;
};

function placeFragmentsOnR3D1() {
  document.getElementById("r3d1-example").innerHTML = fragments.r3D1;
};

function placeOriginalFragmentsOnR3D1() {
  document.getElementById("r3d1-example").innerHTML = originalFragments.r3D1;
};

function placeFragmentsOnR3D2() {
  document.getElementById("r3d2-example").innerHTML = fragments.r3D2;
};

function placeOriginalFragmentsOnR3D2() {
  document.getElementById("r3d2-example").innerHTML = originalFragments.r3D2;
};

function placeFragmentsOnR3D3() {
  document.getElementById("r3d3-example").innerHTML = fragments.r3D3;
};

function placeOriginalFragmentsOnR3D3() {
  document.getElementById("r3d3-example").innerHTML = originalFragments.r3D3;
};

function placeFragmentsOnR4D1() {
  document.getElementById("r4d1-example").innerHTML = fragments.r4D1;
};

function placeOriginalFragmentsOnR4D1() {
  document.getElementById("r4d1-example").innerHTML = originalFragments.r4D1;
};

function placeFragmentsOnR4D2() {
  document.getElementById("r4d2-example").innerHTML = fragments.r4D2;
};

function placeOriginalFragmentsOnR4D2() {
  document.getElementById("r4d2-example").innerHTML = originalFragments.r4D2;
};

function placeFragmentsOnR4D3() {
  document.getElementById("r4d3-example").innerHTML = fragments.r4D3;
};

function placeOriginalFragmentsOnR4D3() {
  document.getElementById("r4d3-example").innerHTML = originalFragments.r4D3;
};

function placeFragmentsOnR5D1() {
  document.getElementById("r5d1-example").innerHTML = fragments.r5D1;
};

function placeOriginalFragmentsOnR5D1() {
  document.getElementById("r5d1-example").innerHTML = originalFragments.r5D1;
};

function placeFragmentsOnR5D2() {
  document.getElementById("r5d2-example").innerHTML = fragments.r5D2;
};

function placeOriginalFragmentsOnR5D2() {
  document.getElementById("r5d2-example").innerHTML = originalFragments.r5D2;
};

function placeFragmentsOnR5D3() {
  document.getElementById("r5d3-example").innerHTML = fragments.r5D3;
};

function placeOriginalFragmentsOnR5D3() {
  document.getElementById("r5d3-example").innerHTML = originalFragments.r5D3;
};









