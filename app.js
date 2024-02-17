//1: Install Node.js, TypeScript and VS Code on your computer.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person_name = 'Anas';
console.log(person_name);
//3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name2 = 'Ansari';
console.log(person_name2.toLocaleLowerCase());
console.log(person_name2.toLocaleUpperCase());
console.log(person_name2);
//4:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Anas ansari: this program is about the autor name and his quote
console.log('Nelson Mandela once said: The greatest glory in living lies not in never falling, but in rising every time we fall.');
//5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Anas ansari: this program is about the autor name and his quote
var famous_person = 'Albert Einstein';
var message = 'A person who never made a mistake never tried anything new.';
console.log("".concat(famous_person, " once said: ").concat(message));
//6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Anas ansari: this program is about add whitespace before and after the name
console.log('   Anas   ');
//7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//8: You should create four lines that look like this: 
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// Anas ansari: this program is about to addition, subtraction, multiplication, and division
console.log(3 + 5);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favorite_number = 7;
console.log("My favorite number is : ".concat(favorite_number));
//10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friends_names = ['Muneeb', 'Zubair', 'Faizan', 'Talha', 'Hasnain'];
console.log(friends_names[0]);
console.log(friends_names[1]);
console.log(friends_names[2]);
console.log(friends_names[3]);
console.log(friends_names[4]);
//12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var my_friends = ['Muneeb', 'Zubair', 'Faizan', 'Talha', 'Hasnain'];
console.log('Hello! How are you ' + my_friends[0]);
console.log('Hello! How are you ' + my_friends[1]);
console.log('Hello! How are you ' + my_friends[2]);
console.log('Hello! How are you ' + my_friends[3]);
console.log('Hello! How are you ' + my_friends[4]);
//13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favorite_transportation = ['Formula 1', 'Yamaha Bike', 'Helicopter'];
console.log('I love to drive the ' + favorite_transportation[0]);
console.log("I'm Riding my " + favorite_transportation[1] + " very carefully");
console.log("I would like to travel in " + favorite_transportation[2]);
//14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ['Rehman', 'Saqib', 'Ali'];
console.log("".concat(guest[0], ", You are cordially invited to dinner tonight"));
console.log("".concat(guest[1], ", We are hosting a special dinner tonight in your honor"));
console.log("".concat(guest[2], ", We would be honored to have your presence."));
//15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guest2 = ['Rehman', 'Saqib', 'Ali'];
var updated_guest = guest2.splice(1, 0, 'Ehtisham');
console.log("".concat(guest2[0], ", You are cordially invited to dinner tonight"));
console.log("".concat(guest2[1], ", Your presense will be worthfull for us"));
console.log("".concat(guest2[2], ", We would be honored to have your presence."));
/*16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
var guest3 = ['Rehman', 'Saqib', 'Ali'];
var new_guest_faraz = guest3.unshift('Faraz');
var new_guest_talha = guest3.push('Talha');
var new_guest_asim = guest3.splice(2, 0, 'Asim');
console.log("".concat(guest3[0], ", You are cordially invited to dinner tonight"));
console.log("".concat(guest3[1], ", Your presense will be worthfull for us"));
console.log("".concat(guest3[2], ", We would be honored to have your presence."));
console.log("".concat(guest3[3], ", We would be honored to have your presence."));
console.log("".concat(guest3[4], ", We would be honored to have your presence."));
console.log("".concat(guest3[5], ", We would be honored to have your presence."));
/*17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
console.log('You can invite only two people for dinner.');
var updated_guest_list = guest3.pop();
var updated_guest_list1 = guest3.pop();
var updated_guest_list2 = guest3.pop();
var updated_guest_list3 = guest3.pop();
console.log("".concat(guest3[0], ", You are cordially invited to dinner tonight"));
console.log("".concat(guest3[1], ", Your presense will be worthfull for us"));
var updated_guest_list4 = guest3.pop();
var updated_guest_list5 = guest3.pop();
// List is empty now..
/*18: Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var locations = ['Mecca', "Madina", 'Qatar', 'Egypt', 'Pelstine'];
console.log("Original Order: " + locations);
var newLoactions = __spreadArray([], locations, true).sort();
console.log("Sorted Order: " + newLoactions);
console.log("Original Order: " + locations);
var reverseO_order = __spreadArray([], locations, true).reverse();
console.log("Reverse Order: " + reverseO_order);
console.log("Original Order: " + locations);
var original_order = __spreadArray([], reverseO_order, true).reverse();
console.log("Original Order Changes into Original state by Reverse method: " + original_order);
console.log("Original Order: " + locations);
var sorted_order = __spreadArray([], original_order, true).sort();
console.log("Order of array is sorted: " + sorted_order);
//19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("I Invited " + guest2.length + " Person for dinner");
//20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var anything = ["Karakaram", "Sindh river", "Karachi", "Quetta", "Murre", "Urdu", "English"];
console.log(__spreadArray([], anything, true));
var obj_vehile = {
    name: "Truck",
    type: "Garbage Truck",
    color: "Yellow",
    year: 2017
};
console.log(obj_vehile);
