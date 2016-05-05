    var listyear= new Array();

    for(var i=1970;i<=2000;i++){
        listyear.push(i);
    }

   var listmonth = new Array();

    for(var i=1;i<=12;i++){
        listmonth .push(i);

    }

    // 次の分類(分類Aごとの分類Bリスト)を定義
    var daysmall = new Array(); //小の月の長さを格納
    var daybig = new Array(); //大の月の長さを格納
    var febsmall = new Array(); //２月の長さ(うるう年でない場合)を格納
    var febbig = new Array(); //２月の長さ(うるう年の場合)を格納

    for(var i=1;i<=31;i++){

          if(i <= 28){
              febsmall .push(i);
          }
          if(i <= 29){
              febbig .push(i);
          }
          if(i  <= 30){
              daysmall .push(i);
          }
          if(i  <= 31){
              daybig .push(i);
          }
    }

    var listday = new Array();
    for(var month=1;month<=12;month++){
       if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){ //大の月の場合
          listday[month]= daybig;
       }else{ //小の月の場合　(２月は別途定義)
          listday[month]= daysmall;
       }
    }

    // 年と月の選択リストを作成
    createSelection( form1.elements['sel_listyear'], "(選択)",listyear, listyear);
    createSelection( form1.elements['sel_listmonth'], "(選択)", listmonth, listmonth);

    ////////////////////////////////////////////////////
    //
    // 選択ボックスに選択肢を追加する関数
    //  引数: ( selectオブジェクト, value値, text値)
    function addSelOption( selObj, myValue, myText )
    {
        selObj.length++;
        selObj.options[ selObj.length - 1].value = myValue ;
        selObj.options[ selObj.length - 1].text  = myText;

    }
    /////////////////////////////////////////////////////
    //
    //  選択リストを作る関数
    //  引数: ( selectオブジェクト, 見出し, value値配列 , text値配列 )
    //
    function createSelection( selObj, midashi, aryValue, aryText )
    {
        selObj.length = 0;
        addSelOption( selObj, midashi, midashi);
        // 初期化
        for( var i=0; i < aryValue.length; i++)
        {
            addSelOption ( selObj , aryValue[i], aryText[i]);
        }
    }
    ///////////////////////////////////////////////////
    //
    //  分類Aが選択されたときに呼び出される関数
    //
    function selectBunruiA(obj)
    {
        // ２月を場合分け
         if(document.form1.sel_listyear.value % 4 == 0){//うるう年の場合
            listday[2]= febbig;
         }else{//うるう年でない場合
            listday[2]= febsmall;
         }
         // 選択肢を動的に生成
        createSelection(form1.elements['sel_listday'], "(品名)",
                listday[obj.value], listday[obj.value]);

    }
    /////////////////////////////////////////////////


//-->