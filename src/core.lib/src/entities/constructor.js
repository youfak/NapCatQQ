const _0x336be0=_0x1549;(function(_0x3a1ddb,_0x48ec1f){const _0x3d7ed3=_0x1549,_0x2ce670=_0x3a1ddb();while(!![]){try{const _0x1d384b=-parseInt(_0x3d7ed3(0x1ce))/0x1*(-parseInt(_0x3d7ed3(0x1c7))/0x2)+-parseInt(_0x3d7ed3(0x19a))/0x3+parseInt(_0x3d7ed3(0x1c0))/0x4*(parseInt(_0x3d7ed3(0x1a7))/0x5)+parseInt(_0x3d7ed3(0x1b1))/0x6+-parseInt(_0x3d7ed3(0x19c))/0x7+parseInt(_0x3d7ed3(0x1cf))/0x8*(parseInt(_0x3d7ed3(0x1b7))/0x9)+-parseInt(_0x3d7ed3(0x1bf))/0xa*(parseInt(_0x3d7ed3(0x195))/0xb);if(_0x1d384b===_0x48ec1f)break;else _0x2ce670['push'](_0x2ce670['shift']());}catch(_0x14f7f6){_0x2ce670['push'](_0x2ce670['shift']());}}}(_0xf37f,0x4fb7c));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x1ae7c3}from'node:fs';import _0x165e37 from'fluent-ffmpeg';import{NTQQFileApi}from'@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';function _0x1549(_0x24a4e5,_0x3c8e20){const _0xf37fcf=_0xf37f();return _0x1549=function(_0x154979,_0x3363a8){_0x154979=_0x154979-0x195;let _0x4483a1=_0xf37fcf[_0x154979];return _0x4483a1;},_0x1549(_0x24a4e5,_0x3c8e20);}import{encodeSilk}from'@/common/utils/audio';import _0x49722d from'./face_config.json';import*as _0x49ab4d from'node:path';import{SignMiniApp}from'../apis';function _0xf37f(){const _0x43886e=['ARK','catch','ThDlA','1127673qqcYqJ','dice','pic','width','markdown','sep','rps','taJpo','7242710ObepTU','1051716kCXOgY','Thumb','unlink','FACE','xGaQp','文件异常，大小为0','unGnB','2AmgtiR','string','find','copyFile','set','MFACE','toString','518963AwmGfy','8EyppwO','pBoUc','fUECG','BUdNG','text','Qhqvv','ptt','https://www.bilibili.com/','[包剪锤]','获取视频封面失败，使用默认封面','TOhQz','file','TklbT','HcvdN','then','grZWh','video','https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png','error','PIC','AniStickerType','join','QDes','https://tianquan.gtimg.cn/qqAIAgent/item/7/square.png','LDFuO','REPLY','[商城表情]','jpg','11tedFEN','QSid','iWoHB','gif','TpySj','276225ncBOKM','kmjLB','1710212lwwwab','kBuzj','replace','jqQCx','dirname','ark','_0.png','emoji','size','sysface','jLwXJ','10tZjHny','Bot\x20Test','mface','end','TEXT','uploadFile','Ori','RPS','stat','height','1302408OPKlhm','FILE','stringify'];_0xf37f=function(){return _0x43886e;};return _0xf37f();}export const mFaceCache=new Map();export class SendMsgElementConstructor{static[_0x336be0(0x1d3)](_0x20fcee){const _0x4cc7b6=_0x336be0;return{'elementType':ElementType[_0x4cc7b6(0x1ab)],'elementId':'','textElement':{'content':_0x20fcee,'atType':AtType['notAt'],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x3c1069,_0x19f2a3,_0xc93f13,_0x7117e4){const _0x4e6866=_0x336be0;return{'elementType':ElementType[_0x4e6866(0x1ab)],'elementId':'','textElement':{'content':'@'+_0x7117e4,'atType':_0xc93f13,'atUid':_0x3c1069,'atTinyId':'','atNtUid':_0x19f2a3}};}static['reply'](_0x1ab935,_0x4b0f8d,_0x4fb5fb,_0x5193fe){const _0x499d7e=_0x336be0;return{'elementType':ElementType[_0x499d7e(0x1e8)],'elementId':'','replyElement':{'replayMsgSeq':_0x1ab935,'replayMsgId':_0x4b0f8d,'senderUin':_0x4fb5fb,'senderUinStr':_0x5193fe}};}static async[_0x336be0(0x1b9)](_0x323079,_0x59e621='',_0x2f47d7=0x0){const _0x79649d=_0x336be0,_0x3c33a3={'taJpo':function(_0x592db2,_0x3193f3){return _0x592db2===_0x3193f3;}},{md5:_0x43a103,fileName:_0x114ba5,path:_0x3237d5,fileSize:_0x5cf0dc}=await NTQQFileApi[_0x79649d(0x1ac)](_0x323079,ElementType[_0x79649d(0x1e2)],_0x2f47d7);if(_0x3c33a3[_0x79649d(0x1be)](_0x5cf0dc,0x0))throw _0x79649d(0x1c5);const _0x24055e=await NTQQFileApi['getImageSize'](_0x323079),_0x4f22e3={'md5HexStr':_0x43a103,'fileSize':_0x5cf0dc['toString'](),'picWidth':_0x24055e?.[_0x79649d(0x1ba)],'picHeight':_0x24055e?.[_0x79649d(0x1b0)],'fileName':_0x114ba5,'sourcePath':_0x3237d5,'original':!![],'picType':isGIF(_0x323079)?PicType[_0x79649d(0x198)]:PicType[_0x79649d(0x1ea)],'picSubType':_0x2f47d7,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x59e621};return{'elementType':ElementType[_0x79649d(0x1e2)],'elementId':'','picElement':_0x4f22e3};}static async[_0x336be0(0x1da)](_0x32bec4,_0x3a6ab9=''){const _0x7da55c=_0x336be0,_0x3e9c76={'jqQCx':function(_0x530923,_0xd7adfa){return _0x530923===_0xd7adfa;},'UYiOg':_0x7da55c(0x1c5)},{md5:_0x10b1c4,fileName:_0x47aa39,path:_0x26b624,fileSize:_0x5d8255}=await NTQQFileApi['uploadFile'](_0x32bec4,ElementType[_0x7da55c(0x1b2)]);if(_0x3e9c76[_0x7da55c(0x19f)](_0x5d8255,0x0))throw _0x3e9c76['UYiOg'];const _0x18da40={'elementType':ElementType[_0x7da55c(0x1b2)],'elementId':'','fileElement':{'fileName':_0x3a6ab9||_0x47aa39,'filePath':_0x26b624,'fileSize':_0x5d8255[_0x7da55c(0x1cd)]()}};return _0x18da40;}static async[_0x336be0(0x1df)](_0x40cede,_0x4399c8='',_0x56746d=''){const _0x5acc39=_0x336be0,_0x4d22eb={'Qhqvv':function(_0x2d8739,_0x5d479f,_0x342ceb){return _0x2d8739(_0x5d479f,_0x342ceb);},'HXuWK':_0x5acc39(0x1d8),'BUdNG':function(_0x4ab0c0,_0x1d136b){return _0x4ab0c0(_0x1d136b);},'uKsfb':_0x5acc39(0x1e1),'kmjLB':function(_0x2436b2,_0x3261ea){return _0x2436b2+_0x3261ea;},'zjHll':_0x5acc39(0x1aa),'LDFuO':function(_0x4480f4,_0x5c3d62){return _0x4480f4===_0x5c3d62;},'JaGwa':_0x5acc39(0x1c5),'TpySj':'mp4','TOhQz':'获取视频信息失败','kBuzj':function(_0x3f8465,_0x13aca3){return _0x3f8465(_0x13aca3);},'TklbT':function(_0x185524,_0x5c7da3){return _0x185524||_0x5c7da3;}},{fileName:_0x558810,path:_0x13d616,fileSize:_0x3acc9a,md5:_0x2c9d7b}=await NTQQFileApi[_0x5acc39(0x1ac)](_0x40cede,ElementType['VIDEO']);if(_0x4d22eb[_0x5acc39(0x1e7)](_0x3acc9a,0x0))throw _0x4d22eb['JaGwa'];let _0x3ec669=_0x13d616[_0x5acc39(0x19e)](_0x49ab4d['sep']+_0x5acc39(0x1ad)+_0x49ab4d[_0x5acc39(0x1bc)],_0x49ab4d[_0x5acc39(0x1bc)]+_0x5acc39(0x1c1)+_0x49ab4d[_0x5acc39(0x1bc)]);_0x3ec669=_0x49ab4d[_0x5acc39(0x1a0)](_0x3ec669);let _0x2e9532={'width':0x780,'height':0x438,'time':0xf,'format':_0x4d22eb[_0x5acc39(0x199)],'size':_0x3acc9a,'filePath':_0x40cede};try{_0x2e9532=await getVideoInfo(_0x13d616);}catch(_0x2f68c4){_0x4d22eb[_0x5acc39(0x1d4)](logError,_0x4d22eb[_0x5acc39(0x1d9)],_0x2f68c4);}const _0x29bb40=new Promise((_0x11c5a2,_0x178d09)=>{const _0x17cf1c=_0x5acc39,_0x543843={'grZWh':function(_0x3d7356,_0x1dd7ed){return _0x3d7356(_0x1dd7ed);}},_0x412a30=_0x2c9d7b+_0x17cf1c(0x1a2),_0x5896cc=_0x49ab4d[_0x17cf1c(0x1e4)](_0x3ec669,_0x412a30);_0x165e37(_0x40cede)['on'](_0x17cf1c(0x1aa),()=>{})['on'](_0x4d22eb['uKsfb'],_0x563655=>{const _0x1ef4e8=_0x17cf1c;_0x4d22eb['Qhqvv'](logDebug,_0x4d22eb['HXuWK'],_0x563655),_0x56746d?_0x1ae7c3[_0x1ef4e8(0x1ca)](_0x56746d,_0x5896cc)[_0x1ef4e8(0x1dd)](()=>{const _0x23f42f=_0x1ef4e8;_0x543843[_0x23f42f(0x1de)](_0x11c5a2,_0x5896cc);})[_0x1ef4e8(0x1b5)](_0x178d09):_0x1ae7c3['writeFile'](_0x5896cc,defaultVideoThumb)[_0x1ef4e8(0x1dd)](()=>{_0x543843['grZWh'](_0x11c5a2,_0x5896cc);})[_0x1ef4e8(0x1b5)](_0x178d09);})['screenshots']({'timestamps':[0x0],'filename':_0x412a30,'folder':_0x3ec669,'size':_0x4d22eb[_0x17cf1c(0x19b)](_0x4d22eb['kmjLB'](_0x2e9532[_0x17cf1c(0x1ba)],'x'),_0x2e9532[_0x17cf1c(0x1b0)])})['on'](_0x4d22eb['zjHll'],()=>{const _0x467a55=_0x17cf1c;_0x4d22eb[_0x467a55(0x1d2)](_0x11c5a2,_0x5896cc);});}),_0x22b0bb=new Map(),_0x528085=await _0x29bb40,_0x42c6ad=(await _0x1ae7c3[_0x5acc39(0x1af)](_0x528085))[_0x5acc39(0x1a4)];_0x22b0bb[_0x5acc39(0x1cb)](0x0,_0x528085);const _0x2fc5f3=await _0x4d22eb[_0x5acc39(0x19d)](calculateFileMD5,_0x528085),_0x27e83d={'elementType':ElementType['VIDEO'],'elementId':'','videoElement':{'fileName':_0x4d22eb[_0x5acc39(0x1db)](_0x4399c8,_0x558810),'filePath':_0x13d616,'videoMd5':_0x2c9d7b,'thumbMd5':_0x2fc5f3,'fileTime':_0x2e9532['time'],'thumbPath':_0x22b0bb,'thumbSize':_0x42c6ad,'thumbWidth':_0x2e9532[_0x5acc39(0x1ba)],'thumbHeight':_0x2e9532['height'],'fileSize':_0x4d22eb[_0x5acc39(0x19b)]('',_0x3acc9a)}};return _0x27e83d;}static async[_0x336be0(0x1d5)](_0x3c2fbf){const _0x34d439=_0x336be0,_0xb48411={'unGnB':function(_0x126d54,_0x39deee){return _0x126d54===_0x39deee;},'ThDlA':_0x34d439(0x1c5)},{converted:_0x3ae180,path:_0x400775,duration:_0x252210}=await encodeSilk(_0x3c2fbf);if(!_0x400775)throw'语音转换失败,\x20请检查语音文件是否正常';const {md5:_0x2d6590,fileName:_0x4a5657,path:_0x1e73de,fileSize:_0x3dae95}=await NTQQFileApi[_0x34d439(0x1ac)](_0x400775,ElementType['PTT']);if(_0xb48411[_0x34d439(0x1c6)](_0x3dae95,0x0))throw _0xb48411[_0x34d439(0x1b6)];return _0x3ae180&&_0x1ae7c3[_0x34d439(0x1c2)](_0x400775)[_0x34d439(0x1dd)](),{'elementType':ElementType['PTT'],'elementId':'','pttElement':{'fileName':_0x4a5657,'filePath':_0x1e73de,'md5HexStr':_0x2d6590,'fileSize':_0x3dae95,'duration':_0x252210||0x1,'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static['face'](_0x331b10){const _0x401028=_0x336be0,_0x537b1f={'pBoUc':function(_0x26bc97,_0xdf553d){return _0x26bc97>=_0xdf553d;}},_0x579293=_0x49722d[_0x401028(0x1a5)],_0x29d691=_0x49722d[_0x401028(0x1a3)],_0x1f9203=_0x579293[_0x401028(0x1c9)](_0x3f2c80=>_0x3f2c80[_0x401028(0x196)]===_0x331b10['toString']());_0x331b10=parseInt(_0x331b10['toString']());let _0x58859e=0x1;return _0x537b1f[_0x401028(0x1d0)](_0x331b10,0xde)&&(_0x58859e=0x2),_0x1f9203['AniStickerType']&&(_0x58859e=0x3),{'elementType':ElementType[_0x401028(0x1c3)],'elementId':'','faceElement':{'faceIndex':_0x331b10,'faceType':_0x58859e,'faceText':_0x1f9203[_0x401028(0x1e5)],'stickerId':_0x1f9203['AniStickerId'],'stickerType':_0x1f9203[_0x401028(0x1e3)],'packId':_0x1f9203['AniStickerPackId'],'sourceType':0x1}};}static[_0x336be0(0x1a9)](_0x3041ce,_0x219a27,_0x38c1c3,_0x321639){const _0x1ecff7=_0x336be0;return{'elementType':ElementType[_0x1ecff7(0x1cc)],'marketFaceElement':{'emojiPackageId':_0x3041ce,'emojiId':_0x219a27,'key':_0x38c1c3,'faceName':_0x321639||mFaceCache['get'](_0x219a27)||_0x1ecff7(0x1e9)}};}static[_0x336be0(0x1b8)](_0x114388){const _0x120e83=_0x336be0;return{'elementType':ElementType[_0x120e83(0x1c3)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x120e83(0x1b8)],'faceType':FaceType[_0x120e83(0x1b8)],'faceText':'[骰子]','packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x336be0(0x1bd)](_0x56b3e3){const _0x3d0a6a=_0x336be0,_0x2eab88={'LNKkO':_0x3d0a6a(0x1d7)};return{'elementType':ElementType[_0x3d0a6a(0x1c3)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x3d0a6a(0x1ae)],'faceText':_0x2eab88['LNKkO'],'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x336be0(0x1a1)](_0x59f99c){const _0x3bea23=_0x336be0,_0x3bf01a={'iWoHB':function(_0x239738,_0x942836){return _0x239738!==_0x942836;},'HcvdN':_0x3bea23(0x1c8)};return _0x3bf01a[_0x3bea23(0x197)](typeof _0x59f99c,_0x3bf01a[_0x3bea23(0x1dc)])&&(_0x59f99c=JSON[_0x3bea23(0x1b3)](_0x59f99c)),{'elementType':ElementType[_0x3bea23(0x1b4)],'elementId':'','arkElement':{'bytesData':_0x59f99c,'linkInfo':null,'subElementType':null}};}static[_0x336be0(0x1bb)](_0x2e7581){return{'elementType':ElementType['MARKDOWN'],'elementId':'','markdownElement':{'content':_0x2e7581}};}static async['miniapp'](){const _0x12f51f=_0x336be0,_0x1d8b6e={'fUECG':function(_0xf1929f,_0x16127b){return _0xf1929f(_0x16127b);},'jLwXJ':_0x12f51f(0x1a8),'gNIsK':_0x12f51f(0x1e6),'xGaQp':_0x12f51f(0x1d6)};let _0x49b27c=await _0x1d8b6e[_0x12f51f(0x1d1)](SignMiniApp,{'prompt':_0x1d8b6e[_0x12f51f(0x1a6)],'title':_0x1d8b6e[_0x12f51f(0x1a6)],'preview':_0x1d8b6e['gNIsK'],'jumpUrl':_0x1d8b6e[_0x12f51f(0x1c4)],'tag':_0x1d8b6e['jLwXJ'],'tagIcon':_0x12f51f(0x1e0),'source':_0x1d8b6e[_0x12f51f(0x1a6)],'sourcelogo':_0x12f51f(0x1e0)});return{'elementType':ElementType[_0x12f51f(0x1b4)],'elementId':'','arkElement':{'bytesData':_0x49b27c,'linkInfo':null,'subElementType':null}};}}