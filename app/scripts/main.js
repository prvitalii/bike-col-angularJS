var bikeApp = angular.module("bikeApp", []);

bikeApp.controller("bikeAppCtrl", function($scope){

$scope.bikes =
  [
    {
       name:'S-Works Epic XTR Di2',
       image: 'images/mtb_1.jpeg',
       category: 'mtb',
       label:'price/quality',
       price:'10000',
       description:"S-Works FACT 12m carbon fiber frame is the best combination of stiffness, strength, and light overall weight, resulting in the utmost efficiency and speed. Meanwhile, the new geometry, RockShox Brain shock, and 100mm of travel, make the Epic the best handling, fastest XC bike you've ever been on.",
       comment: ''
    },
    {
       name:'S-Works Venge ViAS Disc ETap',
       image: 'images/road_1.jpeg',
       category: 'road',
       label:'',
       price:'11500',
       description:"The S-Works Venge ViAS Disc with SRAM eTap is more than just a bike. When the first Venge launched, it changed aerodynamics, but now, we've designed a complete speed system. In fact, nearly every single piece of it was redesigned from the ground up, with every facet examined. And the result is a bike with supreme braking and a 116-second advantage, compared to the Tarmac SL5, over 40km.",
       comment: ''
    },
    {
       name:'S-Works Enduro 27.5',
       image: 'images/mtb_2.jpeg',
       category: 'mtb',
       label:'New',
       price:'8500',
       description:"If you love sending it down the trail, smashing through rock gardens, launching off drops and jumps, and carving through singletrack at ungodly speeds, you'll feel right at home aboard the S-Works Enduro 27.5.",
       comment: ''
    },
    {
       name:'Turbo Kenevo Expert 27.5',
       image: 'images/el_1.jpeg',
       category: 'eBike',
       label:'',
       price:'7000',
       description:"Descending 1,000 straight feet of the rockiest, most technical, and gnarly trails is one of the most exhilarating feelings imaginable, but climbing back up, lap-after-lap, delivers a different kind of 'tingly feeling.' Not the adrenaline kind, but more of the quad-searing variety. And while we're all for getting a hard workout in, it's nice to have some extra power, and there's only one bike that allows you to do that without sacrificing big suspension travel—the Turbo Kenevo Expert 27.5.",
       comment: ''
    },
    {
       name:"Men's Turbo Vado 6.0",
       image: 'images/el_2.jpeg',
       category: 'eBike',
       label:'on sale',
       price:'4800',
       description:"When we set out to revamp our Turbo line, our motto was that 'busy lives call for faster bikes.' That's because we wanted to be sure that we designed a bike that best meets your needs. With our lives getting more hectic with each passing day, after all, finding the littlest time savings can have a huge impact, and the 6.0 truly embodies this concept. It utilizes our most advanced pedal-assist technologies, a high-quality component spec, and a suspension fork to take the edge out of those pesky potholes. No matter where you're going, get there fast and in style with the Turbo Vado 6.0.",
       comment: ''
    },
    {
       name:"S-Works Roubaix McLaren Dura-Ace Di2",
       image: 'images/road_2.jpeg',
       category: 'road',
       label:'',
       price:'11500',
       description:"When you hear 'McLaren,' the first thing that comes to mind are its F1 race machines, but that's not the only race machine that McLaren has their hands in. The S-Works Roubaix McLaren with Shimano Di2 has been designed in tandem with McLaren Applied Technologies. To celebrate this, this limited edition model features a one-of-a-kind paint job, custom hubs, and custom bar tape. So you won't only be riding the most comfortable race-bike out there, you'll be on the coolest one, too.",
       comment: ''
    }
  ];

  $scope.tab = 1;
  $scope.filtText = "";

  $scope.select = function(setTab){
    $scope.tab = setTab;

    if(setTab === 2){
      $scope.filtText = "mtb"
    }else if(setTab === 3){
      $scope.filtText = "road"
    }else if(setTab === 4){
      $scope.filtText = "eBike"
    }else{
      $scope.filtText = ""
    }
  };

  $scope.isSelected = function(checkTab){
    return ($scope.tab === checkTab);  
  };

});