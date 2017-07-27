# Computer chooses a random number 1 - 100.
# User has 6 guesses. Computer will tell user whether their
# guess is too high, too low, or right (in which case they win!)

class Computer
  def guess
    num = rand(1..100)
    puts num
  end
end

class User
  def ask
    puts "Make a Guess please."
    guess = gets
    puts guess
  end
end

al = Computer.new
secret = al.guess

kevin = User.new

myGuess = kevin.ask

if myGuess == secret
  puts "You win!"
end

if myGuess < secret
  puts "Too Low"
end

if myGuess > secret
  puts "Too High"
end
