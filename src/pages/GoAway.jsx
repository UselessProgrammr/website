import { useState } from 'react';
import "../css/goaway.css";
import jumpscare from "../assets/jumpscare/fnaf-foxy.gif";


function GoAway() {

  const [displayProp , setDisplayProp] = useState("none");
  const jumpscareAudio = new Audio("/src/assets/jumpscare/jumpscaresound.mp3")

  function jumpscareFunction() {
    if (displayProp == "block") {
      return
    }
    setDisplayProp("block");
    jumpscareAudio.play();

  }

  return (
    <>
        <section className="container jumscare-page pt-5">

            <div className='cursedColumn1'>
                <p className='cursedText3'>this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real </p>
                <p className='cursedText2'>this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real this cant be real </p>
                <p className='cursedText'>w̴a̸k̸e̶ ̷u̶p̶ ̵w̶a̸k̵e̴ ̸u̶p̸ ̷w̷a̶k̷e̴ ̸u̵p̵ ̵w̴a̷k̵e̶ ̶u̵p̵ ̵w̸a̴k̷e̷ ̸u̸p̷ ̷w̴a̵k̶e̶ ̵u̴p̶ ̷w̵a̷k̴e̵ ̸u̴p̸ ̶w̷a̷k̵e̵ ̶u̸p̵ ̴w̶a̷k̶e̵ ̶u̶p̵ ̷w̸a̴k̷e̴ ̴u̸p̴ ̶w̷a̷k̴e̸ ̴u̸p̵ ̷w̵a̶k̷e̶ ̸u̵p̸ ̷w̸a̴k̸e̸ ̵u̷p̸ ̴w̴a̶k̸e̷ ̶u̶p̴ ̸w̷a̷k̸e̶ ̸u̴p̶ ̶w̴a̴k̴e̵ ̵u̸p̵ ̷w̸a̶k̴e̷ ̵u̶p̵ ̸w̷a̵k̵e̷ ̴u̷p̶ ̵w̴a̷k̴e̵ ̶u̶p̶ ̵w̵a̸k̷e̸ ̶u̴p̸ ̸w̸a̸k̷e̶ ̴u̴p̴ ̸w̷a̷k̷e̸ ̶u̵p̵ ̵w̷a̵k̷e̸ ̴u̴p̵ ̸w̷a̴k̷e̵ ̶u̵p̶ ̴w̸a̶k̶e̷ ̶u̵p̷ ̵w̴a̶k̸e̸ ̵u̵p̶ ̸w̶a̷k̴e̷ ̸u̸p̶ ̷w̵a̸k̴e̵ ̶u̷p̵ ̴w̵a̶k̶e̵ ̵u̸p̸ ̴w̴a̷k̶e̸ ̶u̵p̴ ̵w̶a̴k̸e̵ ̷u̴p̴ ̷w̵a̸k̸e̶ ̷u̵p̷ ̶w̶a̸k̴e̷ ̷u̵p̵ ̸w̴a̶k̴e̶ ̸u̶p̷ ̷w̵a̸k̵e̴ ̷u̷p̷ ̸w̵a̸k̴e̵ ̴u̵p̵ ̶w̴a̶k̸e̴ ̶u̷p̵ ̴w̶a̸k̸e̶ ̴u̷p̶ ̸w̴a̷k̵e̷ ̴u̵p̵ ̸w̵a̴k̵e̸ ̴u̴p̵ ̵w̷a̸k̸e̶ ̶u̵p̷ ̷w̴a̵k̴e̸ ̴u̵p̶ ̸w̷a̷k̴e̶ ̶u̸p̷ ̵w̵a̴k̷e̶ ̶u̵p̵ ̷w̵a̸k̷e̴ ̵u̷p̵</p>
                <p className='cursedText2'>w̴a̸k̸e̶ ̷u̶p̶ ̵w̶a̸k̵e̴ ̸u̶p̸ ̷w̷a̶k̷e̴ ̸u̵p̵ ̵w̴a̷k̵e̶ ̶u̵p̵ ̵w̸a̴k̷e̷ ̸u̸p̷ ̷w̴a̵k̶e̶ ̵u̴p̶ ̷w̵a̷k̴e̵ ̸u̴p̸ ̶w̷a̷k̵e̵ ̶u̸p̵ ̴w̶a̷k̶e̵ ̶u̶p̵ ̷w̸a̴k̷e̴ ̴u̸p̴ ̶w̷a̷k̴e̸ ̴u̸p̵ ̷w̵a̶k̷e̶ ̸u̵p̸ ̷w̸a̴k̸e̸ ̵u̷p̸ ̴w̴a̶k̸e̷ ̶u̶p̴ ̸w̷a̷k̸e̶ ̸u̴p̶ ̶w̴a̴k̴e̵ ̵u̸p̵ ̷w̸a̶k̴e̷ ̵u̶p̵ ̸w̷a̵k̵e̷ ̴u̷p̶ ̵w̴a̷k̴e̵ ̶u̶p̶ ̵w̵a̸k̷e̸ ̶u̴p̸ ̸w̸a̸k̷e̶ ̴u̴p̴ ̸w̷a̷k̷e̸ ̶u̵p̵ ̵w̷a̵k̷e̸ ̴u̴p̵ ̸w̷a̴k̷e̵ ̶u̵p̶ ̴w̸a̶k̶e̷ ̶u̵p̷ ̵w̴a̶k̸e̸ ̵u̵p̶ ̸w̶a̷k̴e̷ ̸u̸p̶ ̷w̵a̸k̴e̵ ̶u̷p̵ ̴w̵a̶k̶e̵ ̵u̸p̸ ̴w̴a̷k̶e̸ ̶u̵p̴ ̵w̶a̴k̸e̵ ̷u̴p̴ ̷w̵a̸k̸e̶ ̷u̵p̷ ̶w̶a̸k̴e̷ ̷u̵p̵ ̸w̴a̶k̴e̶ ̸u̶p̷ ̷w̵a̸k̵e̴ ̷u̷p̷ ̸w̵a̸k̴e̵ ̴u̵p̵ ̶w̴a̶k̸e̴ ̶u̷p̵ ̴w̶a̸k̸e̶ ̴u̷p̶ ̸w̴a̷k̵e̷ ̴u̵p̵ ̸w̵a̴k̵e̸ ̴u̴p̵ ̵w̷a̸k̸e̶ ̶u̵p̷ ̷w̴a̵k̴e̸ ̴u̵p̶ ̸w̷a̷k̴e̶ ̶u̸p̷ ̵w̵a̴k̷e̶ ̶u̵p̵ ̷w̵a̸k̷e̴ ̵u̷p̵</p>
                <p className='cursedText'>w̴a̸k̸e̶ ̷u̶p̶ ̵w̶a̸k̵e̴ ̸u̶p̸ ̷w̷a̶k̷e̴ ̸u̵p̵ ̵w̴a̷k̵e̶ ̶u̵p̵ ̵w̸a̴k̷e̷ ̸u̸p̷ ̷w̴a̵k̶e̶ ̵u̴p̶ ̷w̵a̷k̴e̵ ̸u̴p̸ ̶w̷a̷k̵e̵ ̶u̸p̵ ̴w̶a̷k̶e̵ ̶u̶p̵ ̷w̸a̴k̷e̴ ̴u̸p̴ ̶w̷a̷k̴e̸ ̴u̸p̵ ̷w̵a̶k̷e̶ ̸u̵p̸ ̷w̸a̴k̸e̸ ̵u̷p̸ ̴w̴a̶k̸e̷ ̶u̶p̴ ̸w̷a̷k̸e̶ ̸u̴p̶ ̶w̴a̴k̴e̵ ̵u̸p̵ ̷w̸a̶k̴e̷ ̵u̶p̵ ̸w̷a̵k̵e̷ ̴u̷p̶ ̵w̴a̷k̴e̵ ̶u̶p̶ ̵w̵a̸k̷e̸ ̶u̴p̸ ̸w̸a̸k̷e̶ ̴u̴p̴ ̸w̷a̷k̷e̸ ̶u̵p̵ ̵w̷a̵k̷e̸ ̴u̴p̵ ̸w̷a̴k̷e̵ ̶u̵p̶ ̴w̸a̶k̶e̷ ̶u̵p̷ ̵w̴a̶k̸e̸ ̵u̵p̶ ̸w̶a̷k̴e̷ ̸u̸p̶ ̷w̵a̸k̴e̵ ̶u̷p̵ ̴w̵a̶k̶e̵ ̵u̸p̸ ̴w̴a̷k̶e̸ ̶u̵p̴ ̵w̶a̴k̸e̵ ̷u̴p̴ ̷w̵a̸k̸e̶ ̷u̵p̷ ̶w̶a̸k̴e̷ ̷u̵p̵ ̸w̴a̶k̴e̶ ̸u̶p̷ ̷w̵a̸k̵e̴ ̷u̷p̷ ̸w̵a̸k̴e̵ ̴u̵p̵ ̶w̴a̶k̸e̴ ̶u̷p̵ ̴w̶a̸k̸e̶ ̴u̷p̶ ̸w̴a̷k̵e̷ ̴u̵p̵ ̸w̵a̴k̵e̸ ̴u̴p̵ ̵w̷a̸k̸e̶ ̶u̵p̷ ̷w̴a̵k̴e̸ ̴u̵p̶ ̸w̷a̷k̴e̶ ̶u̸p̷ ̵w̵a̴k̷e̶ ̶u̵p̵ ̷w̵a̸k̷e̴ ̵u̷p̵</p>
                <p className='cursedText2'>wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up</p>
                <p className='cursedText'>w̴a̸k̸e̶ ̷u̶p̶ ̵w̶a̸k̵e̴ ̸u̶p̸ ̷w̷a̶k̷e̴ ̸u̵p̵ ̵w̴a̷k̵e̶ ̶u̵p̵ ̵w̸a̴k̷e̷ ̸u̸p̷ ̷w̴a̵k̶e̶ ̵u̴p̶ ̷w̵a̷k̴e̵ ̸u̴p̸ ̶w̷a̷k̵e̵ ̶u̸p̵ ̴w̶a̷k̶e̵ ̶u̶p̵ ̷w̸a̴k̷e̴ ̴u̸p̴ ̶w̷a̷k̴e̸ ̴u̸p̵ ̷w̵a̶k̷e̶ ̸u̵p̸ ̷w̸a̴k̸e̸ ̵u̷p̸ ̴w̴a̶k̸e̷ ̶u̶p̴ ̸w̷a̷k̸e̶ ̸u̴p̶ ̶w̴a̴k̴e̵ ̵u̸p̵ ̷w̸a̶k̴e̷ ̵u̶p̵ ̸w̷a̵k̵e̷ ̴u̷p̶ ̵w̴a̷k̴e̵ ̶u̶p̶ ̵w̵a̸k̷e̸ ̶u̴p̸ ̸w̸a̸k̷e̶ ̴u̴p̴ ̸w̷a̷k̷e̸ ̶u̵p̵ ̵w̷a̵k̷e̸ ̴u̴p̵ ̸w̷a̴k̷e̵ ̶u̵p̶ ̴w̸a̶k̶e̷ ̶u̵p̷ ̵w̴a̶k̸e̸ ̵u̵p̶ ̸w̶a̷k̴e̷ ̸u̸p̶ ̷w̵a̸k̴e̵ ̶u̷p̵ ̴w̵a̶k̶e̵ ̵u̸p̸ ̴w̴a̷k̶e̸ ̶u̵p̴ ̵w̶a̴k̸e̵ ̷u̴p̴ ̷w̵a̸k̸e̶ ̷u̵p̷ ̶w̶a̸k̴e̷ ̷u̵p̵ ̸w̴a̶k̴e̶ ̸u̶p̷ ̷w̵a̸k̵e̴ ̷u̷p̷ ̸w̵a̸k̴e̵ ̴u̵p̵ ̶w̴a̶k̸e̴ ̶u̷p̵ ̴w̶a̸k̸e̶ ̴u̷p̶ ̸w̴a̷k̵e̷ ̴u̵p̵ ̸w̵a̴k̵e̸ ̴u̴p̵ ̵w̷a̸k̸e̶ ̶u̵p̷ ̷w̴a̵k̴e̸ ̴u̵p̶ ̸w̷a̷k̴e̶ ̶u̸p̷ ̵w̵a̴k̷e̶ ̶u̵p̵ ̷w̵a̸k̷e̴ ̵u̷p̵</p>
                <p className='cursedText'>w̴a̸k̸e̶ ̷u̶p̶ ̵w̶a̸k̵e̴ ̸u̶p̸ ̷w̷a̶k̷e̴ ̸u̵p̵ ̵w̴a̷k̵e̶ ̶u̵p̵ ̵w̸a̴k̷e̷ ̸u̸p̷ ̷w̴a̵k̶e̶ ̵u̴p̶ ̷w̵a̷k̴e̵ ̸u̴p̸ ̶w̷a̷k̵e̵ ̶u̸p̵ ̴w̶a̷k̶e̵ ̶u̶p̵ ̷w̸a̴k̷e̴ ̴u̸p̴ ̶w̷a̷k̴e̸ ̴u̸p̵ ̷w̵a̶k̷e̶ ̸u̵p̸ ̷w̸a̴k̸e̸ ̵u̷p̸ ̴w̴a̶k̸e̷ ̶u̶p̴ ̸w̷a̷k̸e̶ ̸u̴p̶ ̶w̴a̴k̴e̵ ̵u̸p̵ ̷w̸a̶k̴e̷ ̵u̶p̵ ̸w̷a̵k̵e̷ ̴u̷p̶ ̵w̴a̷k̴e̵ ̶u̶p̶ ̵w̵a̸k̷e̸ ̶u̴p̸ ̸w̸a̸k̷e̶ ̴u̴p̴ ̸w̷a̷k̷e̸ ̶u̵p̵ ̵w̷a̵k̷e̸ ̴u̴p̵ ̸w̷a̴k̷e̵ ̶u̵p̶ ̴w̸a̶k̶e̷ ̶u̵p̷ ̵w̴a̶k̸e̸ ̵u̵p̶ ̸w̶a̷k̴e̷ ̸u̸p̶ ̷w̵a̸k̴e̵ ̶u̷p̵ ̴w̵a̶k̶e̵ ̵u̸p̸ ̴w̴a̷k̶e̸ ̶u̵p̴ ̵w̶a̴k̸e̵ ̷u̴p̴ ̷w̵a̸k̸e̶ ̷u̵p̷ ̶w̶a̸k̴e̷ ̷u̵p̵ ̸w̴a̶k̴e̶ ̸u̶p̷ ̷w̵a̸k̵e̴ ̷u̷p̷ ̸w̵a̸k̴e̵ ̴u̵p̵ ̶w̴a̶k̸e̴ ̶u̷p̵ ̴w̶a̸k̸e̶ ̴u̷p̶ ̸w̴a̷k̵e̷ ̴u̵p̵ ̸w̵a̴k̵e̸ ̴u̴p̵ ̵w̷a̸k̸e̶ ̶u̵p̷ ̷w̴a̵k̴e̸ ̴u̵p̶ ̸w̷a̷k̴e̶ ̶u̸p̷ ̵w̵a̴k̷e̶ ̶u̵p̵ ̷w̵a̸k̷e̴ ̵u̷p̵</p>
                <p className='cursedText2'>this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real </p>
                <p className='cursedText'>wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up</p>
                <p className='cursedText'>w̴a̸k̸e̶ ̷u̶p̶ ̵w̶a̸k̵e̴ ̸u̶p̸ ̷w̷a̶k̷e̴ ̸u̵p̵ ̵w̴a̷k̵e̶ ̶u̵p̵ ̵w̸a̴k̷e̷ ̸u̸p̷ ̷w̴a̵k̶e̶ ̵u̴p̶ ̷w̵a̷k̴e̵ ̸u̴p̸ ̶w̷a̷k̵e̵ ̶u̸p̵ ̴w̶a̷k̶e̵ ̶u̶p̵ ̷w̸a̴k̷e̴ ̴u̸p̴ ̶w̷a̷k̴e̸ ̴u̸p̵ ̷w̵a̶k̷e̶ ̸u̵p̸ ̷w̸a̴k̸e̸ ̵u̷p̸ ̴w̴a̶k̸e̷ ̶u̶p̴ ̸w̷a̷k̸e̶ ̸u̴p̶ ̶w̴a̴k̴e̵ ̵u̸p̵ ̷w̸a̶k̴e̷ ̵u̶p̵ ̸w̷a̵k̵e̷ ̴u̷p̶ ̵w̴a̷k̴e̵ ̶u̶p̶ ̵w̵a̸k̷e̸ ̶u̴p̸ ̸w̸a̸k̷e̶ ̴u̴p̴ ̸w̷a̷k̷e̸ ̶u̵p̵ ̵w̷a̵k̷e̸ ̴u̴p̵ ̸w̷a̴k̷e̵ ̶u̵p̶ ̴w̸a̶k̶e̷ ̶u̵p̷ ̵w̴a̶k̸e̸ ̵u̵p̶ ̸w̶a̷k̴e̷ ̸u̸p̶ ̷w̵a̸k̴e̵ ̶u̷p̵ ̴w̵a̶k̶e̵ ̵u̸p̸ ̴w̴a̷k̶e̸ ̶u̵p̴ ̵w̶a̴k̸e̵ ̷u̴p̴ ̷w̵a̸k̸e̶ ̷u̵p̷ ̶w̶a̸k̴e̷ ̷u̵p̵ ̸w̴a̶k̴e̶ ̸u̶p̷ ̷w̵a̸k̵e̴ ̷u̷p̷ ̸w̵a̸k̴e̵ ̴u̵p̵ ̶w̴a̶k̸e̴ ̶u̷p̵ ̴w̶a̸k̸e̶ ̴u̷p̶ ̸w̴a̷k̵e̷ ̴u̵p̵ ̸w̵a̴k̵e̸ ̴u̴p̵ ̵w̷a̸k̸e̶ ̶u̵p̷ ̷w̴a̵k̴e̸ ̴u̵p̶ ̸w̷a̷k̴e̶ ̶u̸p̷ ̵w̵a̴k̷e̶ ̶u̵p̵ ̷w̵a̸k̷e̴ ̵u̷p̵</p>
                <p className='cursedText2'>wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up</p>
                <p className='cursedText3'>this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real </p>
            
                <p className='cursedText'>this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real this is not real </p>
                <p className='cursedText2'>wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up</p>
                <p className='cursedText3'>wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up</p>
            
            </div>

            <div className='cursedColumn2'>
                <h2 className='cursedTitle-1'>P̷L̷E̷A̶S̶E̵ ̴W̷A̶K̴E̷ ̵U̷P̴</h2>
                <h2 className='cursedTitle-2'>WAKE UP</h2>
            </div>

            <div onMouseDown={jumpscareFunction}  className='actual-jumpscare-container'>
              <div className='white-box'>

              </div>

              <div className='the-jumpscare'>
                <img style={{display : displayProp}} src={jumpscare} alt="" />
              </div>
            </div>

</section>
    </>
  );
}

export default GoAway