def censore_words(some_text, word_to_replace):
    print(some_text.replace(word_to_replace, "*" * len(word_to_replace)))


censore_words('A small sentence with some words small', 'small')