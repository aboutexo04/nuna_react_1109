# My Netflix

React + Vite로 만든 Netflix 클론 프로젝트입니다.

## 주요 기능

- **다크 테마**: 검은색 배경의 모던한 UI
- **반응형 네비게이션**: Bootstrap을 활용한 반응형 navbar
- **라우팅**: React Router를 사용한 페이지 전환
- **로고**: 커스텀 로고 이미지 적용
- **영화 배너**: TMDB API를 활용한 인기 영화 배너 (반응형 디자인)

## 페이지 구성

- `/` - 홈페이지 (영화 배너 포함)
- `/movies` - 영화 목록 페이지
- `/movies/:id` - 영화 상세 페이지

## 기술 스택

- React 18
- Vite
- React Router
- React Bootstrap
- React Query (TanStack Query)
- Axios
- TMDB API
- CSS3 (Google Fonts: Cinzel, Playfair Display)

## 최근 업데이트

### 캐러셀 컴포넌트 추가
- **Popular Movies 캐러셀**: 인기 영화 슬라이드
- **Now Playing Movies 캐러셀**: 현재 상영 중인 영화 슬라이드  
- **Upcoming Movies 캐러셀**: 개봉 예정 영화 슬라이드
- **react-multi-carousel** 라이브러리 사용
- 반응형 디자인 (데스크톱: 6개, 태블릿: 2개, 모바일: 1개)
- 무한 스크롤 및 중앙 모드 지원

### 기술적 개선사항
- **React Query 훅 추가**: `usePopularMovies`, `useNowPlayingMovies`, `useUpcomingMovies`
- **MovieCard 컴포넌트**: 영화 정보 표시 (제목, 장르, 평점, 리뷰 수, 연령 등급)
- **장르 매핑**: TMDB 장르 ID를 한국어 이름으로 변환
- **에러 처리**: 로딩 상태 및 에러 상태 UI 개선

### 배너 컴포넌트 개선
- TMDB API를 통한 인기 영화 데이터 연동
- 반응형 디자인 (데스크톱/태블릿/모바일)
- 그라데이션 배경 효과로 텍스트 가독성 향상
- 장식적인 폰트 적용 (제목: Cinzel, 설명: Playfair Display)
- 텍스트 투명도 조정으로 자연스러운 UI

## 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **환경변수 설정**
   프로젝트 루트에 `.env` 파일 생성:
   ```
   VITE_API_KEY=your_tmdb_api_key
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

## API 키 발급
[TMDB (The Movie Database)](https://www.themoviedb.org/settings/api)에서 무료 API 키를 발급받아 사용하세요.


