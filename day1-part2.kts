import java.io.File
import kotlin.system.exitProcess

// does not load all into memory
File("day1.txt").useLines {
    it.forEachIndexed { i1, s1 ->
        File("day1.txt").useLines {
            it.filterIndexed { i2, s2 -> i2 > i1 }
                .forEachIndexed { i2, s2 ->
                    File("day1.txt").useLines {
                        it.filterIndexed { i3, s3 -> i3 > i2 }.forEach { s3 ->
                            if(s1.toLong() + s2.toLong() + s3.toLong() == 2020L) {
                                println(s1.toLong() * s2.toLong() * s3.toLong())
                                exitProcess(0)
                            }
                        }
                    }
                }
        }
    }
}

exitProcess(1)