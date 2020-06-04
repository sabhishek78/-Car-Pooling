function carPooling(trips, capacity){
 var tripArray = new Array(Math.max(...trips.map((e)=>e[2]))+1).fill(0);
	trips.forEach((e)=>{
	  for(j=e[1];j<e[2];j++){
	    tripArray[j]+=e[0];
	  } 
	})
	return !tripArray.some((e)=>e>capacity)
}
console.log(carPooling([[2,1,5],[3,3,7]],4));
console.log(carPooling([[2,1,5],[3,3,7]],5));
console.log(carPooling([[2,1,5],[3,5,7]],3));
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]],11));
console.log(carPooling([[9, 3, 4], [9, 1, 7], [4, 2, 4], [7, 4, 5]],23));

// Car Pooling
// Allowed Time: 1hr
// You are driving a vehicle that has `capacity` empty seats initially available for passengers.  The vehicle **only** drives 
// east (ie. it cannot turn around and drive west.)

// Given a list of `trips, trip[i] = [num_passengers, start_location, end_location]` contains information about the i-th trip: 
// the number of passengers that must be picked up and the locations to pick them up and drop them off.  The locations are given as the number of kilometers due east from your vehicle's initial location.

// Return `true` if and only if it is possible to pick up and drop off all passengers for all the given trips.

//  Examples

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
// Example 3:

// Input: trips = [[2,1,5],[3,5,7]], capacity = 3
// Output: true
// Example 4:

// Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
// Output: true

// Input: trips = [[9, 3, 4], [9, 1, 7], [4, 2, 4], [7, 4, 5]], capacity = 23
// Output: true


// Constraints
// - trips.length <= 1000
// - trips[i].length == 3
// - 1 <= trips[i][0] <= 100
// - 0 <= trips[i][1] < trips[i][2] <= 1000
// - 1 <= capacity <= 100000
