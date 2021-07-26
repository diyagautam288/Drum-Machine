const audioClip = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


class App extends React.Component {
  render()
  {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", className: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "text-center" }, /*#__PURE__*/
      React.createElement("h1", null, "Drum Machine"),
      audioClip.map((clip) => /*#__PURE__*/
      React.createElement(Kit, { key: clip.id, clip: clip })))));




  }}

function Kit({ clip })
{
  const [active, setActive] = React.useState(false);
  const Sound = () => {
    const tag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 500);
    tag.currentTime = 0;
    tag.play();
  };
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  const handleKeyPress = e => {
    if (e.keyCode === clip.keyCode) {
      Sound();
    }
  };
  const name = clip.id;
  return /*#__PURE__*/(
    React.createElement("div", { onClick: Sound, className: `drum-pad btn btn-light p-4 m-3 ${active && "btn-info"}` }, /*#__PURE__*/
    React.createElement("audio", { className: "clip", id: clip.keyTrigger, src: clip.url }),
    clip.keyTrigger, /*#__PURE__*/
    React.createElement("div", null, active && name)));


}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));