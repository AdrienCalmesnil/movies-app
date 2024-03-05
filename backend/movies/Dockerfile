# FROM openjdk:17-jdk-alpine
# ARG JAR_FILE=target/*.jar
# COPY target/movies-0.0.1-SNAPSHOT.jar app-1.0.0.jar
# CMD apt-get update -y
# ENTRYPOINT ["java", "-jar", "app-1.0.0.jar"]

FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]