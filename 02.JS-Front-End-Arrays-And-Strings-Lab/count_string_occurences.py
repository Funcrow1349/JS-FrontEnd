def count_strings(some_text, some_word):
    words_list = some_text.split(" ")
    counter = 0

    for word in words_list: 
        if word == some_word:
            counter += 1
        
    print(counter)

count_strings('This is a word and it also is a sentence', 'is')