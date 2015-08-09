import Tone from 'tone'

// create synth object
//create an effect and connect it to the master output
let tremolo = new Tone.Tremolo().toMaster().start();
tremolo.frequency.value = 2;
tremolo.depth.value = 0.7;
//create a synth and connect it to the effect
let synth = new Tone.SimpleSynth({volume: -20}).connect(tremolo);
synth.oscillator.type = "triangle";
synth.envelope.attack = 0.9;
synth.envelope.decay = 1.0;
synth.envelope.sustain = 0.4;
synth.envelope.release = 1.5;



export default {
	
	triggerInteraction: () => synth.triggerAttack("G4"),
	stopInteraction: () => synth.triggerRelease()

}