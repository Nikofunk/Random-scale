function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Xf2CuFTGj3":
        Script1();
        break;
      case "6R1fVqJoY3h":
        Script2();
        break;
      case "5kMQaOdpuYF":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5yoUgIyIOI7');
const duration = 750;
const easing = 'ease-out';
const id = '5grW2EAPpGe';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5yoUgIyIOI7');
const duration = 750;
const easing = 'ease-out';
const id = '5grW2EAPpGe';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5yoUgIyIOI7');
const duration = 750;
const easing = 'ease-out';
const id = '5grW2EAPpGe';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
