import React from "react"
import './App.css'
import {useState, useEffect} from 'react';
import Modal from 'react-modal';

import imageSangha from "./image/Sangha.jpeg";
import videoSangha from "./videos/VID-20220119-WA0027 (1).mp4";
import { ContextMenu, MenuItem, ContextMenuTrigger, showMenu} from "react-contextmenu";

import FirstComponent from "./firstFunction.js";
import SecondComponent from "./secondFunction.js";
import ThirdComponent from "./thirdFunction.js";

const customStyles = {
        content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
    width: '50%',
        },
};

function SideFunction ({openValue, closeFunction, styleFunction}){
        return(
                <div>
                        <Modal isOpen = {openValue} onAfterOpen = {styleFunction} onRequestClose = {closeFunction} style = {customStyles} contentLabel = "Example Modal">
                                <h1>Report video</h1>
                                <label for = "problemReport">What is this video's problem?</label><br />
                                <form>
          <div>
                                        <input type = "radio" id = "a" name = "as" value = "as" checked /><label for = "a">Sexual content</label><br /><br />
                                        <input type = "radio" id = "b" name = "as" value = "as" /><label for = "b">Violent or repulsive content</label><br /><br />
                                        <input type = "radio" id = "c" name = "as" value = "as" /><label for = "c">Hateful or abusive content</label><br /><br />
                                        <input type = "radio" id = "d" name = "as" value = "as" /><label for = "d">Harassment or bullying</label><br /><br />
                                        <input type = "radio" id = "e" name = "as" value = "as" /><label for = "e">Harmful or dangerous acts</label><br /><br />
                                        <input type = "radio" id = "f" name = "as" value = "as" /><label for = "f">Misinformation</label><br /><br />
                                        <input type = "radio" id = "g" name = "as" value = "as" /><label for = "g">Child abuse</label><br /><br />
                                        <input type = "radio" id = "h" name = "as" value = "as" /><label for = "h">Promotes terrorism</label><br /><br />
                                        <input type = "radio" id = "i" name = "as" value = "as" /><label for = "i">Spam or misleading</label><br /><br />
                                        <input type = "radio" id = "j" name = "as" value = "as" /><label for = "j">Infringes my rights</label><br /><br />
                                        <input type = "radio" id = "k" name = "as" value = "as" /><label for = "k">Captions issue</label><br />
          </div>
  
                                        <p>Flagged videos and users are reviewed by YouTube staff 24 hours a day, 7 days a week to determine whether they violate Community Guidelines. Accounts are penalized for Community Guidelines violations, and serious or repeated violations can lead to account termination.</p>
                                        <button onClick = {closeFunction}>Cancel</button>
                                        <button>Next</button>
                                </form>
                        </Modal>
                </div>
        );
}

function SaveFunction ({openValue, closeFunction, styleFunction}){
        return(
                <div>
                        <Modal isOpen = {openValue} onAfterOpen = {styleFunction} onRequestClose = {closeFunction} style = {customStyles} contentLabel = "Example Modal">
                                <h1>Save To...</h1>
                                <form>
                                        <ul>
            <li><input type = "checkbox" /><label>Watch later</label></li>
            <li><input type = "checkbox" /><label>adf</label></li>
          </ul>
                                </form>
                                <button onClick = {closeFunction}>Cancel</button>
                        </Modal>
                </div>
        );
}

function ShareFunction ({openValue, closeFunction, styleFunction}){
        return(
                <div>
                        <Modal isOpen = {openValue} onAfterOpen = {styleFunction} onRequestClose = {closeFunction} style = {customStyles} contentLabel = "Example Modal">
                                <h1>Share</h1>
                                <form>
          <div style = {{display: "block", border: "1px gray solid", borderRadius: "10%", height: "50px"}}>
            <input type = "text" style = {{border: "1px white solid", paddingTop: "25px"}} value = "https://youtu.be/Sn4k1yIDUQ0" /><button style = {{float: "right"}}>Copy</button>
          </div>
                                </form>
        <button onClick = {closeFunction}>Cancel</button>
                        </Modal>
                </div>
        );
}

export default function App(){
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
  const [modalFirstOpen, setFirstOpen] = useState(false);

  function openFirstModal() {
    setFirstOpen(true);
  }

  function closeFirstModal() {
    setFirstOpen(false);
  }

  const [modalSecondOpen, setSecondOpen] = useState(false);

  function openSecondModal() {
    setSecondOpen(true);
  }

  function closeSecondModal() {
    setSecondOpen(false);
  }

  const [modalThirdOpen, setThirdOpen] = useState(false);

  function openThirdModal(){
    setThirdOpen(true);
  }

  function closeThirdModal(){
    setThirdOpen(false);
  }

  const [modalIsShare, setIsShare] = useState(false);

  function shareModal(){
    setIsShare(true);
  }

  function notShareModal(){
    setIsShare(false);
  }

  const [modalFirstShare, setFirstShare] = useState(false);

  function shareFirstModal() {
    setFirstShare(true);
  }

  function notShareFirstModal() {
    setFirstShare(false);
  }

  const [modalSecondShare, setSecondShare] = useState(false);

  function shareSecondModal() {
    setSecondShare(true);
  }

  function notShareSecondModal() {
    setSecondShare(false);
  }

  const [modalThirdShare, setThirdShare] = useState(false);

  function shareThirdModal(){
    setThirdShare(true);
  }

  function notShareThirdModal(){
    setThirdShare(false);
  }

  const [modalIsSave, setIsSave] = useState(false);

  function saveModal(){
    setIsSave(true);
  }

  function notSaveModal(){
    setIsSave(false);
  }

  const [modalSaveFirst, saveFirst] = useState(false);

  function saveFirstModal(){
    saveFirst(true);
  }

  function notSaveFirstModal(){
    saveFirst(false);
  }

  const [modalSaveSecond, saveSecond] = useState(false);

  function saveSecondModal(){
    saveSecond(true);
  }

  function notSaveSecondModal(){
    saveSecond(false);
  }

  const [modalSaveThird, saveThird] = useState(false);

  function saveThirdModal(){
    saveThird(true);
  }

  function notSaveThirdModal(){
    saveThird(false);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
 
  const [allowOrNot, expandLabel] = useState(true);

  const [favorNumber, feedback] = useState(0);

  useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/2d323a629b.js";
        script.crossorigin = "anonymous";
        document.body.appendChild(script);
  }, []);

  const yesSubscribe = () => {
        const numberOfSubscriber = document.querySelector(".channel .metadata .info .subscribers");
        const decideSubscribe = document.querySelector(".channel .subscribe");
        numberOfSubscriber.innerHTML = "1 subscriber";
        decideSubscribe.innerHTML = "subscribed";
  }

  const noSubscribe = () => {
        const numberOfSubscriber = document.querySelector(".channel .metadata .info .subscribers");
        const decideSubscribe = document.querySelector(".channel .subscribe");
        numberOfSubscriber.innerHTML = "0 subscriber";
        decideSubscribe.innerHTML = "subscribe";
  }

  const decrease = (getNumber) => {
        if(getNumber >= 0){
                feedback(currentNumber => currentNumber - 1);
        }
  }

  const increase = () => {
        feedback(currentNumber => currentNumber + 1);
  }

  const expandReduceLabel = event => {
        expandLabel(current => !current);
  };

  function firstHandle(e){
        var x = e.clientX;
        var y = e.clientY;
  showMenu({
                position: {x , y},
                id: "first_identity"
        });
  }

  function secondHandle(e){
  var x = e.clientX;
  var y = e.clientY;
  showMenu({
    position: {x, y},
    id: "second_identity"
  });
  }

  function thirdHandle(e){
  var x = e.clientX;
  var y = e.clientY;
  showMenu({
    position: {x, y},
    id: "third_identity"
  });
  }

  function alterSubscribe(e){
        var x = e.clientX;
        var y = e.clientY;
        showMenu({
                position: {x , y},
                id: "alter_subscribe"
        });
  }

  return(
  <div className = "App">
  <header>
        <div className = "logo">
                <i className = "fab fa-youtube"></i>
                <span className = "title">Youtube</span>
        </div>
        <div className = "icons">
                <i className = "fas fa-search"></i>
                <i className = "fas fa-ellipsis-v"></i>
        </div>
        </header>
  <section className = "player">
        <video src = {videoSangha} controls autoPlay muted></video>
      </section>
  <div className = "infoAndUpNext">
        <section className = "info">
                <div className = "metadata">
                        <ul className = "hashtags">
                                <li>#DreamCoding</li>
                                <li>#Dreamcoders</li>
                                <li>#Sangha</li>
                        </ul>
                        <div className = "titleAndButton">
                                <span className = {allowOrNot ? 'title clamp' : 'title'}>Clone Coding: Youtube Mobile Website 유튜브 모바일 웹사이트 따라만들기  | 프론트엔드 개발자 입문편: HTML, CSS, JavaScript 드림코딩과 함께하는 프론트엔드 실전 입문편</span>
                                <button className = "moreBtn" onClick = {expandReduceLabel}><i className = {allowOrNot ? 'fas fa-caret-down' : 'fas fa-caret-up'}></i></button>
                        </div>
                        <span className = "views">1M views 1 month ago</span>
                </div>
                <ul className = "actions">
                        <div className = "borderMaking">
                                <li>
                                        <button onClick = {increase}><i className = "active fas fa-thumbs-up"></i></button>
                                </li>
                                <li>
                                        <span>{favorNumber}</span>
                                </li>
                                <li>
                                        <button onClick = {() => decrease(favorNumber - 1)}><i className = "antiActive fas fa-thumbs-down"></i></button>
                                </li>
                        </div>
                        <li>
                                <button onClick = {shareModal}><i className = "fas fa-share"></i><span>Share</span></button>
        <ShareFunction openValue = {modalIsShare} closeFunction = {notShareModal} styleFunction = {afterOpenModal} />
                        </li>
                        <li>
                                <button onClick = {saveModal}><i className = "fas fa-plus"></i><span>Save</span></button>
        <SaveFunction openValue = {modalIsSave} closeFunction = {notSaveModal} styleFunction = {afterOpenModal} />
                        </li>
                        <li>
        <button onClick = {openModal}><i className = "fab fa-font-awesome-flag"></i><span>Report</span></button>
        <SideFunction openValue = {modalIsOpen} closeFunction = {closeModal} styleFunction = {afterOpenModal} />
                        </li>
                </ul>
                <div className = "channel">
                        <div className = "metadata">
                                <img src = {imageSangha} alt = "Sangha" />
                                <div className = "info">
                                        <span className = "name">드림코딩 by 윤상하</span>
                                        <span className = "subscribers">0 subscriber</span>
                                </div>
                        </div>
                        <ContextMenuTrigger className = "paddingDown" id = "alter_subscribe">
                                <button className = "subscribe" onClick = {alterSubscribe}>subscribe</button>
                        </ContextMenuTrigger>
                        <ContextMenu className = "smallGet" id = "alter_subscribe">
                                <MenuItem onClick = {yesSubscribe}>Subscribe</MenuItem>
                                <MenuItem onClick = {noSubscribe}>Unsubscribe</MenuItem>
                        </ContextMenu>
                </div>
        </section>

        <section className = "upNext">
                <span className = "title">Up next</span>
                <ul>
                        <li className = "item">
        <FirstComponent />                                    
                                <div className = "info">
                                        <span className = "title">프론트엔드 강의, 프론트엔드 개발자가 되고 싶다면? 웹개발
                                        입문자편 강의를 시작합니다 $$ (HTML, CSS, Javascript, + 실전 프로젝트)</span>
                                        <span className = "name">드림코딩 by 엘리</span>
                                        <span className = "views">82K views</span>
                                </div>
        <div>
                                <ContextMenuTrigger id="first_identity">
                                        <button className = "moreBtn" onClick = {firstHandle}><i className = "fas fa-ellipsis-v"></i></button>
                                </ContextMenuTrigger>

                                <ContextMenu className = "contextDesign" id="first_identity">
                                        <MenuItem>Add to queue</MenuItem>
                                        <MenuItem>Save to watch later</MenuItem>
                                        <MenuItem onClick = {shareFirstModal}>Share</MenuItem>
          <ShareFunction openValue = {modalFirstShare} closeFunction = {notShareFirstModal} styleFunction = {afterOpenModal} />
                                        <MenuItem onClick = {saveFirstModal}>Save to playlist</MenuItem>
          <SaveFunction openValue = {modalSaveFirst} closeFunction = {notSaveFirstModal} styleFunction = {afterOpenModal} />
                                        <MenuItem>Not interested</MenuItem>
                                        <MenuItem>Don't recommend channel</MenuItem>
          <MenuItem onClick = {openFirstModal}>Report</MenuItem>
          <SideFunction openValue = {modalFirstOpen} closeFunction = {closeFirstModal} styleFunction = {afterOpenModal} />
                                </ContextMenu>
        </div>
                        </li>
                        <li className = "item">
                                <SecondComponent />
                                <div className = "info">
                                        <span className = "title">HTML 기초, React 할때 꼭 필요한 팁! 쉽다고 무시하면 안돼요 | 프론트엔드 개발자 입문편: HTML, CSS, Javascript</span>
                                        <span className = "name">드림코딩 by 엘리</span>
                                        <span className = "views">82K views</span>
                                </div>
                                <ContextMenuTrigger id="second_identity">
                                        <button className = "moreBtn" onClick = {secondHandle}><i className = "fas fa-ellipsis-v"></i></button>
                                </ContextMenuTrigger>

                                <ContextMenu className = "contextDesign" id="second_identity">
                                        <MenuItem>Add to queue</MenuItem>
                                        <MenuItem>Save to watch later</MenuItem>
                                        <MenuItem onClick = {shareSecondModal}>Share</MenuItem>
          <ShareFunction openValue = {modalSecondShare} closeFunction = {notShareSecondModal} styleFunction = {afterOpenModal} />
                                        <MenuItem onClick = {saveSecondModal}>Save to playlist</MenuItem>
          <SaveFunction openValue = {modalSaveSecond} closeFunction = {notSaveSecondModal} styleFunction = {afterOpenModal} />
                                        <MenuItem>Not interested</MenuItem>
                                        <MenuItem>Don't recommend channel</MenuItem>
          <MenuItem onClick = {openSecondModal}>Report</MenuItem>
          <SideFunction openValue = {modalSecondOpen} closeFunction = {closeSecondModal} styleFunction = {afterOpenModal} />
                                </ContextMenu>
                        </li>
                        <li className = "item">
                                <ThirdComponent />
                                <div className = "info">
                                        <span className = "title">HTML 태그 완성, 웹 포트폴리오 만들기 전에 꼭 보세요 | 프론트엔드 개발자 입문편: HTML, CSS, Javascript</span>
                                        <span className = "name">드림코딩 by 엘리</span>
                                        <span className = "views">82K views</span>
                                </div>
                                <ContextMenuTrigger id="third_identity">
                                        <button className = "moreBtn" onClick = {thirdHandle}><i className = "fas fa-ellipsis-v"></i></button>
                                </ContextMenuTrigger>

                                <ContextMenu className = "contextDesign" id="third_identity">
                                        <MenuItem>Add to queue</MenuItem>
                                        <MenuItem>Save to watch later</MenuItem>
                                        <MenuItem onClick = {shareThirdModal}>Share</MenuItem>
          <ShareFunction openValue = {modalThirdShare} closeFunction = {notShareThirdModal} styleFunction = {afterOpenModal} />
                                        <MenuItem onClick = {saveThirdModal}>Save to playlist</MenuItem>
          <SaveFunction openValue = {modalSaveThird} closeFunction = {notSaveThirdModal} styleFunction = {afterOpenModal} />
                                        <MenuItem>Not interested</MenuItem>
                                        <MenuItem>Don't recommend channel</MenuItem>
          <MenuItem onClick = {openThirdModal}>Report</MenuItem>
          <SideFunction openValue = {modalThirdOpen} closeFunction = {closeThirdModal} styleFunction = {afterOpenModal} />
        </ContextMenu>
                       </li>
                </ul>
        </section>
     </div>
  </div>
  );
}