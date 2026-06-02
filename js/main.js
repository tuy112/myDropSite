const subChoices = {
    'A': {
      title: '[A] 마운드 방문 - 누가 갈까?',
      options: [
        { id: 'A-1', text: '포수만 올라감', desc: '사인 점검, 부담 적은 방문' },
        { id: 'A-2', text: '투수코치 마운드 방문', desc: '기술 조언 + 불펜 시간 확보' },
        { id: 'A-3', text: '감독이 직접 방문', desc: '강력한 메시지, 분위기 환기' }
      ]
    },
    'B': {
      title: '[B] 투수 교체 - 누구로?',
      options: [
        { id: 'B-1', text: '최지민 (좌완)', desc: 'vs김재환 .143⭐ · 만루 ERA 2.84' },
        { id: 'B-2', text: '전상현 (우완)', desc: 'vs라모스 .375 · 만루 ERA 4.12 ⚠' },
        { id: 'B-3', text: '곽도규 (우완)', desc: '3연투 후 컨디션 우려 ⚠' }
      ]
    },
    'C': {
      title: '[C] 고의4구 → 김재환 승부',
      options: [
        { id: 'C-1', text: '이준영 그대로 김재환', desc: 'vs김재환 .250 · 만루 .312' },
        { id: 'C-2', text: '최지민으로 교체', desc: 'vs김재환 .143⭐ · 헨리 대타 위험 ⚠' }
      ]
    },
    'D': {
      title: '[D] 수비 강화',
      options: [
        { id: 'D-1', text: '내야 인필드 백', desc: '병살 노림' },
        { id: 'D-2', text: '내야 전진수비', desc: '적시타 차단' },
        { id: 'D-3', text: '외야 라인업', desc: '장타 차단' }
      ]
    }
  };
  
  const results = {
    'A-1': {
      choice: '[A-1] 포수만 방문 + 이준영 유지',
      broadcast: '"포수가 마운드로. 짧은 사인 점검. 이준영, 라모스 상대. 초구 슬라이더 헛스윙! 2구 직구... 받아쳤습니다! 좌중간 2루타! 2주자 모두 홈인!"',
      result: '→ 2실점 (실제 결과와 동일)',
      prob: '→ 실제 감독과 같은 선택',
      points: '65/100'
    },
    'A-2': {
      choice: '[A-2] 투수코치 방문 + 이준영 유지',
      broadcast: '"투수코치가 마운드로 올라갑니다. 이준영과 길게 대화. 그 사이 불펜에서 최지민이 워밍업 시작. 경기 재개. 초구 직구 스트라이크! 2구 슬라이더 파울! 3구 떨어지는 슬라이더, 헛스윙 삼진!"',
      result: '→ 무실점, 위기 탈출',
      prob: '→ 당신의 판단이 옳았을 가능성: 58%',
      points: '72/100'
    },
    'A-3': {
      choice: '[A-3] 감독 직접 방문 + 이준영 유지',
      broadcast: '"이범호 감독이 직접 마운드로! 라모스 흠칫. 분위기 환기 후 승부 재개. 초구 헛스윙! 2구 파울! 풀카운트 끝에 유격수 땅볼! 1·2루 살아남, 2사 1·3루."',
      result: '→ 1실점 (선행주자 진루)',
      prob: '→ 당신의 판단이 옳았을 가능성: 51%',
      points: '60/100'
    },
    'B-1': {
      choice: '[B-1] 최지민으로 교체',
      broadcast: '"최지민, 마운드로! 라모스 vs 좌완 매치업. 초구 슬라이더 파울, 2구 직구 헛스윙, 3구 떨어지는 변화구... 헛스윙 삼진!"',
      result: '→ 무실점, 위기 탈출!',
      prob: '→ 당신의 판단이 옳았을 가능성: 76%',
      points: '88/100'
    },
    'B-2': {
      choice: '[B-2] 전상현으로 교체',
      broadcast: '"전상현 등판. 라모스 .375로 약점. 초구 직구 한가운데, 받아쳤습니다! 좌익선상 2루타! 양석환·강승호 모두 홈인. 3-6 추가 실점!"',
      result: '→ 2실점, 3-6 (함정 선택)',
      prob: '→ 당신의 판단이 옳았을 가능성: 22% ⚠',
      points: '38/100'
    },
    'B-3': {
      choice: '[B-3] 곽도규로 교체',
      broadcast: '"3연투 곽도규 등판. 컨디션 의문. 초구 직구 빠지고 볼, 2구 받아쳤습니다! 우중간 2루타!"',
      result: '→ 2실점',
      prob: '→ 당신의 판단이 옳았을 가능성: 18% ⚠',
      points: '32/100'
    },
    'C-1': {
      choice: '[C-1] 고의4구 + 이준영으로 김재환 승부',
      broadcast: '"라모스 고의4구. 만루! 김재환 타석. 이준영 좌vs좌 매치업. 초구 직구 스트라이크, 2구 슬라이더 헛스윙, 3구... 받아쳤습니다! 중전 적시타!"',
      result: '→ 2실점 (만루 위험)',
      prob: '→ 당신의 판단이 옳았을 가능성: 35%',
      points: '48/100'
    },
    'C-2': {
      choice: '[C-2] 고의4구 + 최지민으로 김재환 승부',
      broadcast: '"라모스 고의4구, 만루. 두산 벤치 움직임 - 헨리 대타! 좌투 무력화. 최지민 vs 헨리, 초구 직구 헛스윙, 2구 직구 한가운데... 만루홈런!"',
      result: '→ 4실점, 3-8 (대참사)',
      prob: '→ 당신의 판단이 옳았을 가능성: 28% ⚠',
      points: '35/100'
    },
    'D-1': {
      choice: '[D-1] 내야 인필드 백',
      broadcast: '"내야 백업, 병살 노림. 라모스 타석. 초구 직구 스트라이크, 2구 슬라이더 헛스윙, 3구... 받아쳤습니다! 1-2-3 병살타!"',
      result: '→ 무실점, 이닝 종료!',
      prob: '→ 당신의 판단이 옳았을 가능성: 64%',
      points: '78/100'
    },
    'D-2': {
      choice: '[D-2] 내야 전진수비',
      broadcast: '"전진 수비. 라모스 타석. 초구 헛스윙, 2구 받아쳤습니다! 유격수 키 넘는 안타! 2주자 모두 홈인."',
      result: '→ 2실점',
      prob: '→ 당신의 판단이 옳았을 가능성: 31%',
      points: '42/100'
    },
    'D-3': {
      choice: '[D-3] 외야 라인업',
      broadcast: '"외야 라인업, 장타 차단. 라모스 받아쳤습니다! 좌중간 2루타! 외야가 라인업이라 처리 느림. 2주자 모두 홈인!"',
      result: '→ 2실점',
      prob: '→ 당신의 판단이 옳았을 가능성: 28%',
      points: '38/100'
    }
  };
  
  function showPage(pageId, scrollTarget) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    target.classList.add('active', 'fade-in');
    
    if (scrollTarget) {
      // 잠깐 기다린 후 스크롤 (페이지 표시 후)
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      }, 10);
    } else {
      window.scrollTo(0, 0);
    }
  }
  
  function showSubChoice(mainChoice) {
    const data = subChoices[mainChoice];
    document.getElementById('sub-title').textContent = data.title;
    
    const optionsHtml = data.options.map(opt => `
      <button class="choice-btn" onclick="selectFinal('${opt.id}')">
        <span class="choice-label">${opt.id.split('-')[1]}</span>
        <span class="choice-text">
          <strong>${opt.text}</strong><br>
          <span style="font-size:12px;color:#64748b;font-weight:normal;display:block;margin-top:4px">${opt.desc}</span>
        </span>
        <span class="choice-arrow">›</span>
      </button>
    `).join('');
    
    document.getElementById('sub-options').innerHTML = optionsHtml;
    showPage('page-subchoice');
  }
  
  function selectFinal(choiceId) {
    const result = results[choiceId];
    document.getElementById('your-choice').textContent = result.choice;
    document.getElementById('your-broadcast').textContent = result.broadcast;
    document.getElementById('your-result').textContent = result.result;
    document.getElementById('your-prob').textContent = result.prob;
    document.getElementById('your-points').textContent = result.points;
    showPage('page-result');
  }
  
  function goBack() {
    // 뒤로가기 시 선택지 위치로 스크롤
    showPage('page-question', 'choices-section');
  }
  
  function tryAgain() {
    // 같은 문제, 선택지 부분으로
    showPage('page-question', 'choices-section');
  }
  
  function switchTeam() {
    alert('두산 입장 모드는 정식 버전에서 만나실 수 있습니다!\n\n같은 7회초 상황을 두산 감독 시점에서 결정하는 모드예요. 곧 만들어드릴게요.');
  }
  
  function nextGame() {
    alert('다른 경기 모드는 정식 버전에서 만나실 수 있습니다!\n\n현재는 KIA vs 두산 2024.8.17 한 경기만 준비되어 있어요. 더 많은 경기 추가 예정!');
  }
  
  function restart() {
    showPage('page-question');
  }