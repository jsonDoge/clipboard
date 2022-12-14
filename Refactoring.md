# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Function is behaving unexpectedly when a literal 0 is provided as paritionKey, which is likely a bug. Adding extra if checks.

Reverse event checking if. Reversing it will allow to return early and removing multiple confusing checks.

Combine nested (candate) and (candidate !== "string") ifs to reduce nesting.

line 12: if event.partitionKey... and line 22: if (candidate ===) are performing same checks we can move string check inside the first check to avoid duplication.

Reversing event.paritionKey check will help to return early and remove the following else case.

Maybe more of a personal preference, but ternary assignment will allow to avoid let usage and candidate value reassignment. 

Returning early inside .length > MAX_PARTITION_KEY_LENGTH check to avoid unecessary reassignment.