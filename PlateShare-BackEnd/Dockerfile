FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -q clean package -DskipTests

# --------------------

FROM eclipse-temurin:21-jre
WORKDIR /app
ARG JAR_FILE=/app/target/*.jar
COPY --from=build ${JAR_FILE} app.jar

EXPOSE 8084
ENTRYPOINT ["java", "-Dspring.profiles.active=docker", "-jar", "app.jar"]
