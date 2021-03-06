angular.module('websdoneApp')

.controller('arabasco', ['$scope', function($scope) {
    $scope.pageClass = 'arabasco';

    $scope.workDetails = [{ 
        title: 'Arabasco', 
        img: 'img/portfolio/arabasco.png',
        img2: 'img/portfolio/thumb/arabasco.gif',
        title2: 'User Interface Developer', 
        desc:'Developing full interactivity and responsiveness for Arabasco airline ',
        link: 'http://www.arabasco.aero/home',
        linkLanding: '#portfolio-arabasco',
        carousel: '<p>HTML5 - CSS3  <br />  jQuery </p>',
        class: 'top',
        category: 'category-1',
        order: '3',
        control: 'arabasco'
      }  
    ];
}])

.controller('truphone', ['$scope', function($scope) {
    $scope.pageClass = 'truphone';

    $scope.workDetails = [{ 
        title: 'Truphone', 
        img: 'img/portfolio/truephone.png',
        img2: 'img/portfolio/thumb/truphone-2.jpg',
        title2: 'User Interface Developer', 
        desc:'Responsive front-end development for compatibility with iPhone, Samsung, iPads, Galaxy, modern browsers',
        link: 'http://chillaxing.online/chillaxing/websdone/truphone',
        linkLanding: '#portfolio-truphone',
        carousel: '<p> HTML5 -  SASS - jQuery - Bootstrap</p>',
        class: 'top',
        category: 'category-1',
        order: '1',
        control: 'truphone'
      }  
    ];
}])

.controller('sanmanuel', ['$scope', function($scope) {
    $scope.pageClass = 'sanmanuel';

    $scope.workDetails = [{ 
        title: 'San Manuel <br /> Casino', 
        img: 'img/portfolio/sanmanuel.png',
        img2: 'img/portfolio/thumb/sanmanuel.png',
        title2: 'Front-end developer', 
        desc:'Responsive and interactivity web development for the game industry',
        link: 'https://play.sanmanuel.com/',
        linkLanding: '#portfolio-sanmanuel',
        carousel: '<p> JS Frameworks </p> <p> SASS / CSS3 </p> <p> Grunt - GIT </p> ',
        class: 'top',
        category: 'category-1',
        order: '1',
        control: 'sanmanuel'
      }  
    ];
}])

.controller('virginatlantic', ['$scope', function($scope) {
    $scope.pageClass = 'Virgin Atlantic';

    $scope.workDetails = [{ 
        title: 'Virgin Atlantic', 
        img: 'img/portfolio/virgin.png',
        img2: 'img/portfolio/thumb/iscoll-virgin.png',
        title2: 'User Interface Developer', 
        desc:'Virgin Atlantic add development working for Seven Squared @ Project magazine, scroll down and see!',
        link: 'http://chillaxing.online/chillaxing/websdone/virgin-iscoll/',
        linkLanding: '#portfolio-virginatlantic',
        carousel: '<p> iScroll - jqtouch </p> <p> jQuery </p>  ',
        class: 'top',
        category: 'category-3',
        order: '4',
        control: 'virginatlantic'
      }  
    ];
}])

.controller('smokefree', ['$scope', function($scope) {
    $scope.pageClass = 'Smoke Free';

    $scope.workDetails = [{ 
        title: 'Smoke free', 
        img: 'img/portfolio/smokefree.png',
        img2: 'img/portfolio/thumb/smokefree.jpg',
        title2: 'User Interface Developer', 
        desc:'Responsive website development for the "Quit Now" section in the "Smokefree" NHS website',
        link: 'https://quitnow.smokefree.nhs.uk/',
        linkLanding: '#portfolio-smokefree',
        carousel: '<p>CSS3 - LESS </p>',
        class: 'bottom',
        category: 'category-1',
        order: '5',
        control: 'smokefree'
      }  
    ];
}])

.controller('forduk', ['$scope', function($scope) {
    $scope.pageClass = 'Ford UK';

    $scope.workDetails = [{ 
        title: 'Ford UK', 
        img: 'img/portfolio/ford.png',
        img2: 'img/portfolio/thumb/ford.png',
        title2: 'Interactive Web Developer', 
        desc:'Ford HTML5 web development for ipad 1 add development working for Seven Squared @ Project magazine',
        link: 'http://chillaxing.online/chillaxing/websdone/FordUK/',
        carousel: '<p> JS - jQuery - CSS </p> ',
        linkLanding: '#portfolio-forduk',
        class: 'bottom',
        category: 'category-3',
        order: '6',
        control: 'forduk'
      }  
    ];
}])

.controller('nissan', ['$scope', function($scope) {
    $scope.pageClass = 'Nissan';

    $scope.workDetails = [{ 
        title: 'Nissan', 
        img: 'img/portfolio/nissan.png',
        img2: 'img/portfolio/thumb/nissan.png',
        title2: 'Interactive Web Developer', 
        desc:'Nissan HTML5 web development for ipad 1 add development working for Seven Squared @ Project magazine',
        link: 'http://chillaxing.online/chillaxing/websdone/nissan/',
        linkLanding: '#portfolio-nissan',
        carousel: ' <p> jQuery - JS </p> ',
        class: 'bottom',
        category: 'category-3',
        order: '7',
        control: 'nissan'
      }  
    ];
}])

.controller('musicPlayer', ['$scope', function($scope) {
    $scope.pageClass = 'Music player';

    $scope.workDetails = [{ 
        title: 'Music <br /> player', 
        img: 'img/portfolio/music.png',
        img2: 'img/portfolio/thumb/casette.gif',
        title2: 'Interactive Web Developer', 
        desc:'Music player developed with jQuery and CSS3 - drag the cassette or stop it to play another one!',
        link: 'http://chillaxing.online/chillaxing/websdone/musicPlayer/index.html',
        linkLanding: '#portfolio-musicPlayer',
        carousel: '<p> JS - jQuery </p>',
        class: 'top',
        category: 'category-2',
        order: '8',
        control: 'musicPlayer'
      }  
    ];
}])

.controller('bupa', ['$scope', function($scope) {
    $scope.pageClass = 'Bupa &amp; miadidas';

    $scope.workDetails = [{ 
        title: 'Bupa &amp; <br /> miadidas', 
        img: 'img/portfolio/bupa.png',
        img2: 'img/portfolio/thumb/bupa.gif',
        title2: 'Front-end Developer', 
        desc:'Responsive website promotions development for Bupa',
        link: 'http://websdone.co.uk/work/BUPA/index.html',
        linkLanding: '#portfolio-bupa',
        carousel: '<p>HTML5 - CSS3 </p>',
        class: 'top',
        category: 'category-1',
        order: '9',
        control: 'bupa'
      }  
    ];
}])

.controller('bupaemail', ['$scope', function($scope) {
    $scope.pageClass = 'Bupa email campaign';

    $scope.workDetails = [{ 
        title: 'Bupa email campaign', 
        img: 'img/portfolio/bupa2.png',
        img2: 'img/portfolio/thumb/bupa.gif',
        title2: 'Front-end Developer', 
        desc:'Responsive Email campaigns and website promotions for Bupa',
        link: 'http://websdone.co.uk/work/emails/bupa.html',
        linkLanding: '#portfolio-bupaemail',
        carousel: '<p>HTML5 - CSS  </p>',
        class: 'top',
        category: 'category-4',
        order: '10',
        control: 'bupa2'
      }  
    ];
}])

.controller('polished', ['$scope', function($scope) {
    $scope.pageClass = 'polished';

    $scope.workDetails = [{ 
        title: 'PolishedRock Ltd.', 
        img: 'img/portfolio/polished.png',
        img2: 'img/portfolio/thumb/polished.jpg',
        title2: 'Front-end developer', 
        linkLanding: '#portfolio-polished',
        desc:'Web developer',
        link: 'http://polishedrockltd.co.uk',
        carousel: '<p>HTML5 - CSS Animations - SASS - Responsive - PHP - jQuery </p>',
        class: 'bottom',
        category: 'category-1',
        order: '11',
        control: 'kobo'
      }  
    ];
}])

.controller('agatha', ['$scope', function($scope) {
    $scope.pageClass = 'Agatha';

    $scope.workDetails = [{ 
        title: 'Agatha <br /> Christie', 
        img: 'img/portfolio/agatha.png',
        img2: 'img/portfolio/thumb/agatha.gif',
        title2: 'User Interface developer', 
        desc:'Developement of animated prototypes for advertising agency',
        link: 'http://chillaxing.online/chillaxing/websdone/agathachristie/',
        linkLanding: '#portfolio-agatha',
        carousel: '<p> CSS3 animation</p>',
        class: 'bottom',
        category: 'category-3',
        order: '12',
        control: 'agatha'
      }  
    ];
}])

.controller('youtube', ['$scope', function($scope) {
    $scope.pageClass = 'youtube';

    $scope.workDetails = [{ 
        title: 'YouTube music player', 
        img: 'img/portfolio/youtube.png',
        img2: 'img/portfolio/thumb/youtube.png',
        title2: 'ReactJS Developer', 
        desc:'<p>Developed with ReactJS and Google API </p><p> YouTube Data API v3 to search and play YouTube videos</p> ',
        link: 'http://chillaxing.online/chillaxing/websdone/music-player/',
        linkLanding: '#portfolio-youtube',
        carousel: '<p>ReactJS - Google API  <br /> </p>',
        class: 'top',
        category: 'category-5',
        order: '1',
        control: 'youtube'
      }  
    ];
}])
.controller('updating', ['$scope', function($scope) {
    $scope.pageClass = 'updating';

    $scope.workDetails = [{ 
        title: 'Updating', 
        img: 'img/portfolio/arabasco.gif',
        img2: 'img/portfolio/thumb/soon.png',
        title2: 'Updating', 
        desc:'Coming soon...',
        // link: '#',
        // linkLanding: '#portfolio-updating',
        carousel: '<p> Coming soon...</p> ',
        class: 'bottom'
      }  
    ];
}])