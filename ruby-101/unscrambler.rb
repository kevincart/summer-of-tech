# Computer selects a 5 or 6 letter word out of the
# 2000 most commonly used words and displays it to
# the user scrambled.
# User must guess the word before they can proceed.
# After five words guessed, computer tells user their
# elapsed time.
common_words = File.read("words.txt").split.select do |word|
  [5,6].include?(word.length)
end
the_word = common_words.sample
scrambled = the_word.chars.shuffle.join

puts the_word
puts scrambled

5.times do
  puts "Guess the word - '#{the_word}'"
  guess = gets.chomp
  if guess == the_word
    puts "YEP"
    break
  else puts "Nope"
  end
end
