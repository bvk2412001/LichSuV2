System.register("chunks:///_virtual/Answer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameplayCtrl.ts","./SoundManager.ts"],(function(n){var e,t,i,o,a,s,r,c,l,u,p,g,d,m,h,f;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,i=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){a=n.cclegacy,s=n._decorator,r=n.Sprite,c=n.CCBoolean,l=n.Node,u=n.Vec3,p=n.UITransform,g=n.tween,d=n.Animation,m=n.Component},function(n){h=n.GameplayCtrl},function(n){f=n.SoundManager}],execute:function(){var w,C,v,y,b,F,z,P,S,T,A,I,L;a._RF.push({},"1f594q0rbpP/LJjn0xY6GkB","Answer",void 0);var Q=s.ccclass,_=s.property;n("Answer",(w=Q("Answer"),C=_(r),v=_(r),y=_(c),b=_(l),F=_(l),w((S=e((P=function(n){function e(){for(var e,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a))||this,i(e,"icon",S,o(e)),i(e,"bg",T,o(e)),i(e,"isTrue",A,o(e)),i(e,"dung",I,o(e)),i(e,"sai",L,o(e)),e.data=void 0,e}t(e,n);var a=e.prototype;return a.SetUpWin=function(n){this.icon.node.active=!0,this.icon.node.position=new u(0,0,0),this.data=n,this.dung.active=!1,this.sai.active=!1,this.isTrue=!0,this.icon.spriteFrame=n.imageQuest,this.icon.node.getComponent(p).setContentSize(h.resizeImage(350,280,n.imageQuest))},a.SetUpLose=function(n){this.data=n,this.dung.active=!1,this.sai.active=!1,this.isTrue=!1,this.icon.node.active=!0,this.icon.spriteFrame=n.imageQuest,this.icon.node.getComponent(p).setContentSize(h.resizeImage(350,280,n.imageQuest)),this.icon.node.position=new u(0,0,0)},a.onClick=function(){var n=this;0!=h.instance.isChoose&&(1==this.isTrue?(this.dung.active=!0,g(this.icon.node).to(1,{worldPosition:h.instance.trongFull.worldPosition}).call((function(){n.icon.node.active=!1,h.instance.trongFull.getComponent(d).resume(),h.instance.trongFull.getComponent(r).spriteFrame=h.instance.spriteFully})).start()):(this.node!=h.instance.answer1?(h.instance.answer1.getComponent(e).dung.active=!0,g(h.instance.answer1.getComponent(e).icon.node).to(1,{worldPosition:h.instance.trongFull.worldPosition}).call((function(){h.instance.answer1.getComponent(e).icon.node.active=!1,h.instance.trongFull.getComponent(d).resume(),h.instance.trongFull.getComponent(r).spriteFrame=h.instance.spriteFully})).start()):(h.instance.answer2.getComponent(e).dung.active=!0,g(h.instance.answer2.getComponent(e).icon.node).to(1,{worldPosition:h.instance.trongFull.worldPosition}).call((function(){h.instance.answer2.getComponent(e).icon.node.active=!1,h.instance.trongFull.getComponent(d).resume(),h.instance.trongFull.getComponent(r).spriteFrame=h.instance.spriteFully})).start()),this.sai.active=!0),f.instance.PlaySound(this.data.sound1),this.scheduleOnce((function(){f.instance.PlaySound(n.data.sound2),n.scheduleOnce((function(){h.instance.Reset()}),n.data.time2)}),this.data.time1))},e}(m)).prototype,"icon",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=e(P.prototype,"bg",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=e(P.prototype,"isTrue",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),I=e(P.prototype,"dung",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=e(P.prototype,"sai",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=P))||z));a._RF.pop()}}}));

System.register("chunks:///_virtual/DataQuest.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,r,a,l,n,o;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,a=e._decorator,l=e.SpriteFrame,n=e.AudioClip,o=e.CCInteger}],execute:function(){var u,s,c,p,b,g,m,h,f,d,y,z,D,v,w;r._RF.push({},"e3d6ezW5l9PdYnb/PecvVEG","DataQuest",void 0);var Q=a.ccclass,P=a.property;e("DataQuest",(u=Q("DataQuest"),s=P(l),c=P(l),p=P(n),b=P(o),g=P(n),m=P(o),u((d=i((f=function(){t(this,"imageTrong",d,this),t(this,"imageQuest",y,this),t(this,"sound1",z,this),t(this,"time1",D,this),t(this,"sound2",v,this),t(this,"time2",w,this)}).prototype,"imageTrong",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=i(f.prototype,"imageQuest",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=i(f.prototype,"sound1",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=i(f.prototype,"time1",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=i(f.prototype,"sound2",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=i(f.prototype,"time2",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=f))||h));r._RF.pop()}}}));

System.register("chunks:///_virtual/DataSai.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,r,a,l,n,o;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,a=e._decorator,l=e.SpriteFrame,n=e.AudioClip,o=e.CCInteger}],execute:function(){var u,s,c,p,b,m,h,f,g,y,d,D,z;r._RF.push({},"0745bYC27NHD5cAUsZOieB0","DataSai",void 0);var S=a.ccclass,v=a.property;e("DataSai",(u=S("DataSai"),s=v(l),c=v(n),p=v(o),b=v(n),m=v(o),u((g=i((f=function(){t(this,"imageQuest",g,this),t(this,"sound1",y,this),t(this,"time1",d,this),t(this,"sound2",D,this),t(this,"time2",z,this)}).prototype,"imageQuest",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=i(f.prototype,"sound1",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=i(f.prototype,"time1",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=i(f.prototype,"sound2",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=i(f.prototype,"time2",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=f))||h));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameplayCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DataQuest.ts","./Answer.ts","./DataSai.ts","./SoundManager.ts","./TypingEffect.ts","./StarCtrl.ts"],(function(t){var e,n,i,r,a,o,s,l,u,c,h,p,g,f,w,d,m,y,S,b,z,C,v,T,x;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.Node,l=t.Sprite,u=t.SpriteFrame,c=t.tween,h=t.Widget,p=t.Vec3,g=t.UIOpacity,f=t.Animation,w=t.UITransform,d=t.randomRangeInt,m=t.screen,y=t.Size,S=t.Component},function(t){b=t.DataQuest},function(t){z=t.Answer},function(t){C=t.DataSai},function(t){v=t.SoundManager},function(t){T=t.TypingEffect},function(t){x=t.StarCtrl}],execute:function(){var A,F,q,D,N,P,I,U,G,R,M,O,W,L,_,B,E,Q,j,k,H,J,K,V,Z,X;a._RF.push({},"948e5hDrcBKbZyhpGJGUSq1","GameplayCtrl",void 0);var Y=o.ccclass,$=o.property;t("GameplayCtrl",(A=Y("GameplayCtrl"),F=$(s),q=$(s),D=$(C),N=$(b),P=$(s),I=$(s),U=$(l),G=$(s),R=$(u),M=$(s),O=$(s),A(((X=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,i(e,"trongNode",_,r(e)),i(e,"title",B,r(e)),i(e,"imageSai",E,r(e)),i(e,"quests",Q,r(e)),i(e,"answer1",j,r(e)),i(e,"answer2",k,r(e)),i(e,"imageTrong",H,r(e)),i(e,"trongFull",J,r(e)),i(e,"spriteFully",K,r(e)),i(e,"canvas",V,r(e)),i(e,"ui",Z,r(e)),e.isChoose=!1,e.isPlaySound=!1,e.index=0,e}n(e,t);var a=e.prototype;return a.start=function(){var t=this;e.instance=this,this.quests=this.shuffleArray(this.quests),this.imageSai=this.shuffleArray(this.imageSai),v.instance.PlayThoai(0),this.scheduleOnce((function(){c(t.trongNode.getComponent(h)).to(1,{left:0}).call((function(){t.ui.scale=new p(1,1,1),c(t.title.getComponent(g)).to(1,{opacity:255}).call((function(){t.scheduleOnce((function(){t.SetAnswer()}),4),T.instance.startText()})).start()})).start()}),6)},a.playSound=function(){var t=this;1!=this.isPlaySound&&(this.isPlaySound=!0,v.instance.PlayThoai(1),this.scheduleOnce((function(){t.isPlaySound=!1}),4))},a.SetAnswer=function(){var t=this;if(this.trongFull.getComponent(f).pause(),this.index!=this.quests.length){0==d(0,2)?(this.answer1.getComponent(z).SetUpWin(this.quests[this.index]),this.answer2.getComponent(z).SetUpLose(this.imageSai[this.index])):(this.answer2.getComponent(z).SetUpWin(this.quests[this.index]),this.answer1.getComponent(z).SetUpLose(this.imageSai[this.index])),this.imageTrong.spriteFrame=this.quests[this.index].imageTrong,c(this.answer1).to(1,{scale:new p(1,1,1)}).start(),c(this.answer2).to(1,{scale:new p(1,1,1)}).call((function(){t.isChoose=!0})).start(),this.index++}else{this.trongFull.getComponent(f).play();this.trongNode.getComponent(h),this.trongNode.parent.getComponent(w).contentSize.width;c(this.trongNode.getComponent(h)).to(.5,{left:.5}).call((function(){t.scheduleOnce((function(){x.instance.showNode()}),2)})).start()}},a.Reset=function(){var t=this;c(this.answer1).to(1,{scale:new p(0,0,0)}).start(),c(this.answer2).to(1,{scale:new p(0,0,0)}).call((function(){t.SetAnswer()})).start()},e.resizeImage=function(t,e,n){var i=0,r=0,a=n.rect.width/n.rect.height;return console.log(n.rect.width+" "+n.rect.height),a>1?(r=t,i=t/a):(i=e,r=e*a),new y(r,i)},a.shuffleArray=function(t){for(var e=t.length-1;e>0;e--){var n=this.getRandomInt(0,e+1),i=[t[n],t[e]];t[e]=i[0],t[n]=i[1]}return t},a.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},a.update=function(t){this.canvas.getComponent(w).setContentSize(this.getSizeWindow(1366,1024))},a.getSizeWindow=function(t,e){var n=0,i=0,r=m.windowSize.width/t,a=m.windowSize.height/e;return r>a?(i=m.windowSize.width/a,n=e):(n=m.windowSize.height/r,i=t),new y(i,n)},e}(S)).instance=void 0,_=e((L=X).prototype,"trongNode",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(L.prototype,"title",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(L.prototype,"imageSai",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Q=e(L.prototype,"quests",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),j=e(L.prototype,"answer1",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=e(L.prototype,"answer2",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=e(L.prototype,"imageTrong",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=e(L.prototype,"trongFull",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=e(L.prototype,"spriteFully",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=e(L.prototype,"canvas",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=e(L.prototype,"ui",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=L))||W));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SoundManager2.ts","./StarCtrl.ts","./Answer.ts","./DataQuest.ts","./DataSai.ts","./GameplayCtrl.ts","./SoundManager.ts","./TypingEffect.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SoundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,i,o,t,r,a,u,c,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,u=e.AudioSource,c=e.AudioClip,s=e.Component}],execute:function(){var l,p,h,d,f,y,g,S;r._RF.push({},"4b35bMgiVFFO5CWhSdicM3M","SoundManager",void 0);var b=a.ccclass,v=a.property;e("SoundManager",(l=b("SoundManager"),p=v(u),h=v(c),l(((S=function(e){function n(){for(var n,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,o(n,"sources",y,t(n)),o(n,"thoai",g,t(n)),n}i(n,e);var r=n.prototype;return r.onLoad=function(){n.instance=this},r.PlaySound=function(e){this.sources.playOneShot(e,.2)},r.PlayThoai=function(e){this.sources.playOneShot(this.thoai[e],.2)},n}(s)).instance=void 0,y=n((f=S).prototype,"sources",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=n(f.prototype,"thoai",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=f))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/SoundManager2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,r,o,a,u,l,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){o=n.cclegacy,a=n._decorator,u=n.AudioSource,l=n.AudioClip,c=n.Component}],execute:function(){var s,p,d,f,g,y,h,m,b,S;o._RF.push({},"67f65S9g4NP37ZdgmmLBncW","SoundManager",void 0);var v=a.ccclass,_=a.property;n("SoundManager",(s=v("SoundManager"),p=_(u),d=_(l),f=_(l),s(((S=function(n){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o))||this,t(e,"audio",h,r(e)),t(e,"sao",m,r(e)),t(e,"Endgame",b,r(e)),e}i(e,n);var o=e.prototype;return o.__preload=function(){e.instance=this},o.playSao=function(){this.audio.playOneShot(this.sao,.2)},o.playEndgame=function(){this.audio.playOneShot(this.Endgame,.2)},e}(c)).instance=void 0,h=e((y=S).prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(y.prototype,"sao",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"Endgame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StarCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundManager2.ts"],(function(t){var n,e,o,i,a,r,c,l,s,u,f,p;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,c=t.Node,l=t.tween,s=t.Vec3,u=t.Animation,f=t.Component},function(t){p=t.SoundManager}],execute:function(){var d,h,b,g,m,S,y,v,w,C;a._RF.push({},"66c26VKi6dFdZP42VJLPg7G","StarCtrl",void 0);var A=r.ccclass,N=r.property;t("StarCtrl",(d=A("StarCtrl"),h=N(c),b=N(c),g=N(c),d(((C=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return n=t.call.apply(t,[this].concat(a))||this,o(n,"nodetinhsao",y,i(n)),o(n,"board",v,i(n)),o(n,"stars",w,i(n)),n.diem=0,n}e(n,t);var a=n.prototype;return a.__preload=function(){null==n.instance&&(n.instance=this)},a.start=function(){},a.showNode=function(){var t=this;p.instance.playEndgame(),this.nodetinhsao.active=!0,l(this.nodetinhsao).to(.5,{scale:new s(.4,.4,1)}).call((function(){l(t.board).to(.5,{scale:new s(1,1,1)}).call((function(){t.ShowStars()})).start()})).start()},a.btnReset=function(){p.instance=null,n.instance=null},a.btnBackGame=function(){console.log("[ACTION]: BACK")},a.btnNextGame=function(){console.log("[ACTION]: NEXTGAME")},a.btnListgame=function(){console.log("[ACTION]: SHOWLISTGAME")},a.ShowStars=function(){var t=this;this.stars.forEach((function(n,e){e<t.diem&&t.scheduleOnce((function(){l(n).to(.2,{scale:new s(1,1,1)}).call((function(){n.getComponent(u).play("scale"),p.instance.playSao()})).start()}),.2*e)}))},a.SetDiem=function(t){this.diem=t},n}(f)).instance=void 0,y=n((S=C).prototype,"nodetinhsao",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(S.prototype,"board",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(S.prototype,"stars",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=S))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/TypingEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,i,r,c,o,a,l,u;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){c=t.cclegacy,o=t._decorator,a=t.Label,l=t.CCInteger,u=t.Component}],execute:function(){var s,h,f,p,g,d,b,y;c._RF.push({},"00762RfvG1Bm5/i7C5VTgWd","TypingEffect",void 0);var x=o.ccclass,T=o.property;t("TypingEffect",(s=x("TypingEffect"),h=T(a),f=T(l),s(((y=function(t){function n(){for(var n,e=arguments.length,c=new Array(e),o=0;o<e;o++)c[o]=arguments[o];return n=t.call.apply(t,[this].concat(c))||this,i(n,"textLabel",d,r(n)),n.currentIndex=0,n.fullText="Theo thời gian, các hình ảnh trên mặt trống đồng đã bị mờ đi.\nBé hãy phục dựng lại trống đồng bằng cách chọn đúng các hình ảnh",i(n,"duration",b,r(n)),n}e(n,t);var c=n.prototype;return c.onLoad=function(){n.instance=this},c.startText=function(){this.textLabel.string="",this.showTextWithDuration(this.fullText,this.duration)},c.showTextWithDuration=function(t,n){var e=this,i=t.length,r=n/i;this.schedule((function(){e.currentIndex<i?(e.textLabel.string+=t[e.currentIndex],e.currentIndex++):e.unscheduleAllCallbacks()}),r)},n}(u)).instance=void 0,d=n((g=y).prototype,"textLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=n(g.prototype,"duration",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),p=g))||p));c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});