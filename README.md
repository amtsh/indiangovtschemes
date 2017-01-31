### Indian Government Schemes

**Goal of this project**

A SpringBoot application aimed to organize Indian government schemes, so that a person of certain age, caste and gender can easily find relevant schemes. Edit

**How to Run**

1. Start mongodb server locally
2.
```
./gradlew clean jar
java -jar build/libs/govtschemes-0.0.1-SNAPSHOT.jar
```

In case of remote mongodb server
```
export MONGO_DB_URL="insert mongodb url here"
./gradlew clean jar
java -jar build/libs/govtschemes-0.0.1-SNAPSHOT.jar --spring.data.mongodb.uri=${MONGO_DB_URL}
```

