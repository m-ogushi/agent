
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