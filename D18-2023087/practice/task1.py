sample_input="Hai I'm Niranjan and Im from Nagercoil"
def longest_word (sentence):
    words=sentence.split()
    long_word=words[0]
    max_value=len(words[0])
    for key,word in enumerate(words):
        if len(word)>max_value:
            max_value=len(word)
            long_word=word
    print("longest word:",long_word)
    return max_value , long_word
longest_word(sample_input)
