// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    function findMatching (array,name) {
        return array.filter(function(driverName){
            return driverName.toLowerCase() === name.toLowerCase()
        })
    }

    function fuzzyMatch(array,letter){
        return array.filter(function(driverName){
            return driverName.startsWith(letter)
        })

    }
    const drivers2 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

    function matchName(array,town){
        return array.filter(function(driver){
            return driver.name.toLowerCase() === town.toLowerCase()
        })

    }


    console.log(findMatching(drivers, "Bobby"))
    console.log(fuzzyMatch(drivers, "Y"))
    console.log(matchName(drivers2,"Annette"))