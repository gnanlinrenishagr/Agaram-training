sample_input="Hai I'm Niranjan and Im from Nagercoil"
def vowels (all_words):
    max_vowel=0
    for letters in all_words:
        vowels="aeiouAEIOU"
        if letters == vowels:
            max_vowel += 1
    print(max_vowel)
    return max_vowel
def max_vowels_words(list_of_words):
    words=list_of_words.split()
    maximum_vowel=0
    max_word=""
    for position,word in enumerate(words):
        if vowels(word)>maximum_vowel:
            maximum_vowel=vowels(word)
            max_word=words[position]
        return maximum_vowel , max_word
max_vowels_words(sample_input)
        