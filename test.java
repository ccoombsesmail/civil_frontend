class Bird {
  private String type;
  private String definingCharacteristic;
  private boolean extinct;
  private int numberOfWings;

  public Bird(String type, String definingCharacteristic, boolean extinct, int numberOfWings) {
      this.type = type;
      this.definingCharacteristic = definingCharacteristic;
      this.extinct = extinct;
      this.numberOfWings = numberOfWings;
  }

  // getters and setters for type, definingCharacteristic, extinct, and numberOfWings
}

class FoodPreference {
  private List<String> preferredFoods;

  public FoodPreference(List<String> preferredFoods) {
      this.preferredFoods = preferredFoods;
  }

  // getter and setter for preferredFoods
}

class WaterBird extends Bird {
  private String bodyOfWater;

  public WaterBird(String type, String definingCharacteristic, boolean extinct, int numberOfWings, String bodyOfWater) {
      super(type, definingCharacteristic, extinct, numberOfWings);
      this.bodyOfWater = bodyOfWater;
  }

  // getter and setter for bodyOfWater
}

class Parrot extends Bird {
  private int vocabularySize;
  private String favoriteSaying;

  public Parrot(String type, String definingCharacteristic, boolean extinct, int numberOfWings, int vocabularySize, String favoriteSaying) {
      super(type, definingCharacteristic, extinct, numberOfWings);
      this.vocabularySize = vocabularySize;
      this.favoriteSaying = favoriteSaying;
  }

  // getters and setters for vocabularySize and favoriteSaying
}

class Aviary {
  private List<Bird> birds;

  public Aviary(List<Bird> birds) {
      this.birds = birds;
  }

  // getter and setter for birds
}

class Conservatory {
  private List<Aviary> aviaries;

  public Conservatory(List<Aviary> aviaries) {
      this.aviaries = aviaries;
  }

  // methods for rescuing new birds and assigning them to aviaries
  // method for calculating food needs