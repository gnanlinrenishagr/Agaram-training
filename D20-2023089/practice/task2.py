sampless_input="the quick brown fox jumps over the lazy dog the quick brown fox the,lazy dog the quick brown fox the"
def funct (sample_input):
    output={}
    sample=sample_input.split()
    for each in sample:
        if each not in output:
            output.update({each:1})
        else:
            output[each]+=1
    print(output)
funct(sampless_input)
#mod2

string = "the quick brown fox jumps over the lazy dog the quick brown fox the"
list_str = string.split()
result_dict={}

for wrd in list_str:

    if wrd in result_dict:
        result_dict[wrd]+=1
    else:
        result_dict[wrd]=1

print(result_dict)
#mod3
string = "the quick brown fox jumps over the lazy dog the quick brown fox"
char = ''
dic_letter = {}
for i in string:
    if i == ' ':
        if char in dic_letter:
            dic_letter[char] += 1
        else:
            dic_letter[char] = 1
        char = ''
    else:
        char = char + i

print(dic_letter)