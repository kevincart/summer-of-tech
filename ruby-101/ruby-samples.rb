# Code samples from 'Programming Ruby', by Dave Thomas.
def sayGoodnight(name)
  result = "Goodnight, #{name}"
  return result
end

# Time for bed...
puts sayGoodnight("John-Boy")
puts sayGoodnight("Mary-Ellen")

# From Chapter 2
class Song
  def initialize(name, artist, duration)
    @name = name
    @artist = artist
    @duration = duration
  end
end

# We'll start off by creating a basic class Song,
# This class contains a single method, initialize.
# initialize is a special method in Ruby programs.
# When you call Song.new, to create a new Song object,
# Ruby creates an empty object, and then calls initialize.
aSong = Song.new("Bicylops", "Fleck", 260)
puts aSong.inspect

# Lets add a 'to_s' method to our Song class
class Song
  def to_s
    "Song: #{@name}--#{@artist} (#{@duration})"
  end
end
aSong.to_s

# We can extend this class like so:
class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
end

aKSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")
aKSong.to_s
