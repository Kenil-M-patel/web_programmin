<?php

function isPrime($number) {
    // 1 and numbers less than 1 are not prime
    if ($number <= 1) {
        return false;
    }

    // Check for factors from 2 to sqrt($number)
    for ($i = 2; $i <= sqrt($number); $i++) {
        // If $number is divisible by $i, it's not prime
        if ($number % $i == 0) {
            return false;
        }
    }

    // If no factors were found, $number is prime
    return true;
}

// Test the function
$testNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
foreach ($testNumbers as $number) {
    if (isPrime($number)) {
        echo "$number is prime.\n";
    } else {
        echo "$number is not prime.\n";
    }
}
?>
