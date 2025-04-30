function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});


function files(index) {
  var data = `
./img/images/male0001.png
  ./img/images/male0002.png
  ./img/images/male0003.png
  ./img/images/male0003.png
  ./img/images/male0004.png
  ./img/images/male0005.png
  ./img/images/male0006.png
  ./img/images/male0007.png
  ./img/images/male0008.png
  ./img/images/male0009.png
  ./img/images/male0010.png
  ./img/images/male0011.png
  ./img/images/male0012.png
  ./img/images/male0013.png
  ./img/images/male0014.png
  ./img/images/male0015.png
  ./img/images/male0016.png
  ./img/images/male0017.png
  ./img/images/male0018.png
  ./img/images/male0019.png
  ./img/images/male0020.png
  ./img/images/male0021.png
  ./img/images/male0022.png
  ./img/images/male0023.png
  ./img/images/male0024.png
  ./img/images/male0025.png
  ./img/images/male0026.png
  ./img/images/male0027.png
  ./img/images/male0028.png
  ./img/images/male0029.png
  ./img/images/male0030.png
  ./img/images/male0031.png
  ./img/images/male0032.png
  ./img/images/male0033.png
  ./img/images/male0034.png
  ./img/images/male0035.png
  ./img/images/male0036.png
  ./img/images/male0037.png
  ./img/images/male0038.png
  ./img/images/male0039.png
  ./img/images/male0040.png
  ./img/images/male0041.png
  ./img/images/male0042.png
  ./img/images/male0043.png
  ./img/images/male0044.png
  ./img/images/male0045.png
  ./img/images/male0046.png
  ./img/images/male0047.png
  ./img/images/male0048.png
  ./img/images/male0049.png
  ./img/images/male0050.png
  ./img/images/male0051.png
  ./img/images/male0052.png
  ./img/images/male0053.png
  ./img/images/male0054.png
  ./img/images/male0055.png
  ./img/images/male0056.png
  ./img/images/male0057.png
  ./img/images/male0058.png
  ./img/images/male0059.png
  ./img/images/male0060.png
  ./img/images/male0061.png
  ./img/images/male0062.png
  ./img/images/male0063.png
  ./img/images/male0064.png
  ./img/images/male0065.png
  ./img/images/male0066.png
  ./img/images/male0067.png
  ./img/images/male0068.png
  ./img/images/male0069.png
  ./img/images/male0070.png
  ./img/images/male0071.png
  ./img/images/male0072.png
  ./img/images/male0073.png
  ./img/images/male0074.png
  ./img/images/male0075.png
  ./img/images/male0076.png
  ./img/images/male0077.png
  ./img/images/male0078.png
  ./img/images/male0079.png
  ./img/images/male0080.png
  ./img/images/male0081.png
  ./img/images/male0082.png
  ./img/images/male0083.png
  ./img/images/male0084.png
  ./img/images/male0085.png
  ./img/images/male0086.png
  ./img/images/male0087.png
  ./img/images/male0088.png
  ./img/images/male0089.png
  ./img/images/male0090.png
  ./img/images/male0091.png
  ./img/images/male0092.png
  ./img/images/male0093.png
  ./img/images/male0094.png
  ./img/images/male0095.png
  ./img/images/male0096.png
  ./img/images/male0097.png
  ./img/images/male0098.png
  ./img/images/male0099.png
  ./img/images/male0100.png
  ./img/images/male0101.png
  ./img/images/male0102.png
  ./img/images/male0103.png
  ./img/images/male0104.png
  ./img/images/male0105.png
  ./img/images/male0106.png
  ./img/images/male0107.png
  ./img/images/male0108.png
  ./img/images/male0109.png
  ./img/images/male0110.png
  ./img/images/male0111.png
  ./img/images/male0112.png
  ./img/images/male0113.png
  ./img/images/male0114.png
  ./img/images/male0115.png
  ./img/images/male0116.png
  ./img/images/male0117.png
  ./img/images/male0118.png
  ./img/images/male0119.png
  ./img/images/male0120.png
  ./img/images/male0121.png
  ./img/images/male0122.png
  ./img/images/male0123.png
  ./img/images/male0124.png
  ./img/images/male0125.png
  ./img/images/male0126.png
  ./img/images/male0127.png
  ./img/images/male0128.png
  ./img/images/male0129.png
  ./img/images/male0130.png
  ./img/images/male0131.png
  ./img/images/male0132.png
  ./img/images/male0133.png
  ./img/images/male0134.png
  ./img/images/male0135.png
  ./img/images/male0136.png
  ./img/images/male0137.png
  ./img/images/male0138.png
  ./img/images/male0139.png
  ./img/images/male0140.png
  ./img/images/male0141.png
  ./img/images/male0142.png
  ./img/images/male0143.png
  ./img/images/male0144.png
  ./img/images/male0145.png
  ./img/images/male0146.png
  ./img/images/male0147.png
  ./img/images/male0148.png
  ./img/images/male0149.png
  ./img/images/male0150.png
  ./img/images/male0151.png
  ./img/images/male0152.png
  ./img/images/male0153.png
  ./img/images/male0154.png
  ./img/images/male0155.png
  ./img/images/male0156.png
  ./img/images/male0157.png
  ./img/images/male0158.png
  ./img/images/male0159.png
  ./img/images/male0160.png
  ./img/images/male0161.png
  ./img/images/male0162.png
  ./img/images/male0163.png
  ./img/images/male0164.png
  ./img/images/male0165.png
  ./img/images/male0166.png
  ./img/images/male0167.png
  ./img/images/male0168.png
  ./img/images/male0169.png
  ./img/images/male0170.png
  ./img/images/male0171.png
  ./img/images/male0172.png
  ./img/images/male0173.png
  ./img/images/male0174.png
  ./img/images/male0175.png
  ./img/images/male0176.png
  ./img/images/male0177.png
  ./img/images/male0178.png
  ./img/images/male0179.png
  ./img/images/male0180.png
  ./img/images/male0181.png
  ./img/images/male0182.png
  ./img/images/male0183.png
  ./img/images/male0184.png
  ./img/images/male0185.png
  ./img/images/male0186.png
  ./img/images/male0187.png
  ./img/images/male0188.png
  ./img/images/male0189.png
  ./img/images/male0190.png
  ./img/images/male0191.png
  ./img/images/male0192.png
  ./img/images/male0193.png
  ./img/images/male0194.png
  ./img/images/male0195.png
  ./img/images/male0196.png
  ./img/images/male0197.png
  ./img/images/male0198.png
  ./img/images/male0199.png
  ./img/images/male0200.png
  ./img/images/male0201.png
  ./img/images/male0202.png
  ./img/images/male0203.png
  ./img/images/male0204.png
  ./img/images/male0205.png
  ./img/images/male0206.png
  ./img/images/male0207.png
  ./img/images/male0208.png
  ./img/images/male0209.png
  ./img/images/male0210.png
  ./img/images/male0211.png
  ./img/images/male0212.png
  ./img/images/male0213.png
  ./img/images/male0214.png
  ./img/images/male0215.png
  ./img/images/male0216.png
  ./img/images/male0217.png
  ./img/images/male0218.png
  ./img/images/male0219.png
  ./img/images/male0220.png
  ./img/images/male0221.png
  ./img/images/male0222.png
  ./img/images/male0223.png
  ./img/images/male0224.png
  ./img/images/male0225.png
  ./img/images/male0226.png
  ./img/images/male0227.png
  ./img/images/male0228.png
  ./img/images/male0229.png
  ./img/images/male0230.png
  ./img/images/male0231.png
  ./img/images/male0232.png
  ./img/images/male0233.png
  ./img/images/male0234.png
  ./img/images/male0235.png
  ./img/images/male0236.png
  ./img/images/male0237.png
  ./img/images/male0238.png
  ./img/images/male0239.png
  ./img/images/male0240.png
  ./img/images/male0241.png
  ./img/images/male0242.png
  ./img/images/male0243.png
  ./img/images/male0244.png
  ./img/images/male0245.png
  ./img/images/male0246.png
  ./img/images/male0247.png
  ./img/images/male0248.png
  ./img/images/male0249.png
  ./img/images/male0250.png
  ./img/images/male0251.png
  ./img/images/male0252.png
  ./img/images/male0253.png
  ./img/images/male0254.png
  ./img/images/male0255.png
  ./img/images/male0256.png
  ./img/images/male0257.png
  ./img/images/male0258.png
  ./img/images/male0259.png
  ./img/images/male0260.png
  ./img/images/male0261.png
  ./img/images/male0262.png
  ./img/images/male0263.png
  ./img/images/male0264.png
  ./img/images/male0265.png
  ./img/images/male0266.png
  ./img/images/male0267.png
  ./img/images/male0268.png
  ./img/images/male0269.png
  ./img/images/male0270.png
  ./img/images/male0271.png
  ./img/images/male0272.png
  ./img/images/male0273.png
  ./img/images/male0274.png
  ./img/images/male0275.png
  ./img/images/male0276.png
  ./img/images/male0277.png
  ./img/images/male0278.png
  ./img/images/male0279.png
  ./img/images/male0280.png
  ./img/images/male0281.png
  ./img/images/male0282.png
  ./img/images/male0283.png
  ./img/images/male0284.png
  ./img/images/male0285.png
  ./img/images/male0286.png
  ./img/images/male0287.png
  ./img/images/male0288.png
  ./img/images/male0289.png
  ./img/images/male0290.png
  ./img/images/male0291.png
  ./img/images/male0292.png
  ./img/images/male0293.png
  ./img/images/male0294.png
  ./img/images/male0295.png
  ./img/images/male0296.png
  ./img/images/male0297.png
  ./img/images/male0298.png
  ./img/images/male0299.png
  ./img/images/male0300.png
   `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`
  }
})

gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`
  }
})

gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`
  }
})
