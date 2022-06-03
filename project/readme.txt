main.html 실행시 
단순히 main.html을 열어서 사용하는 것 보다는 
VScode에서 폴더 채로 불러온 다음 
live server 확장을 설치해 open with live server 로 실행시키는 것이 ajax에서 오류가 날 가능성이 적습니다. 
ajax로 다른 웹 서버를 가져오는 것이기 때문에, 다른 웹 서버가 꺼져있거나. cors 정책이 바뀌거나 기타 사유로 서버에서 가져오지 못하는 경우 HTML에 값이 반영되지 않을 수 있습니다. 
pm2.5 값이 없는건 정상입니다. (서버 DB에 pm2.5에 대한 부분이 없음) 